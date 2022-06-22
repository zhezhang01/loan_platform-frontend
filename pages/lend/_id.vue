<template>
  <!--Details-->
  <div class="item-detail wrap">
    <div class="breadcrumbs">
      <a href="/">HomePage</a>&gt; <a href="/lend">Investment list</a>&gt;
      <span class="cur">Project details</span>
    </div>
    <div class="item-detail-head clearfix" data-target="sideMenu">
      <div class="hd">
        <i class="icon icon-xin"></i>
        <h2 style="width:70%">{{ lend.title }}</h2>
      </div>

      <!-- Start of the infomation -->
      <div class="bd clearfix">
        <div class="data" style="width: auto;">
          <ul>
            <li>
              <span class="f16">Loan amount</span><br />
              <span class="f30 c-333">${{ lend.amount }}</span>
            </li>
            <li class="relative">
              <span class="f16">ARP</span><br />
              <span class="f30 c-orange">{{ lend.lendYearRate * 100 }}% </span>
            </li>
            <li>
              <span class="f16">Loan term</span><br />
              <span class="f30 c-333">{{ lend.period }}</span>
              mon
            </li>
            <li><span class="c-888">Borrow Id:</span>{{ lend.lendNo }}</li>
            <li>
              <span class="c-888">Time:</span>
              {{ lend.lendStartDate }} to {{ lend.lendEndDate }}
            </li>
            <li>
              <span class="c-888">Repayment method:</span>{{ lend.param.returnMethod }}
            </li>
            <li class="colspan" style="line-height: 60px;">
              <span class="c-888 fl">schedule:</span>
              <div class="progress-bar fl" style="margin-top:26px;">
                <span
                  :style="
                    'width:' + (lend.investAmount / lend.amount) * 100 + '%'
                  "
                ></span>
              </div>
              <span class="c-orange">
                {{ (lend.investAmount / lend.amount) * 100 }}%
              </span>
              <span>
                {{ lend.investNum }} People invested ${{ lend.investAmount }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Start of the investment list -->
      <div v-if="userType === 1 && lend.status === 1" class="bd clearfix">
        <div class="data" style="width: auto;">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="Investment Amount">
              <el-input
                v-model="invest.investAmount"
                :disabled="lend.status != 1"
                @blur="getInterestCount()"
              >
                <template slot="append">$</template>
              </el-input>
            </el-form-item>
            <el-form-item label="Expected profit">
              <span class="c-orange">${{ interestCount }}</span>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="agree">Agree</el-checkbox>
              <span class="orange">
                <a href="#">"Lending Agreement"</a>
              </span>
              <el-button
                type="warning"
                @click="commitInvest"
                :disabled="!agree"
              >
                Invest Now
              </el-button>
            </el-form-item>
          </el-form>
          <p>
            Account balance <span class="c-orange">${{ account }}</span> ,
            <a href="/user/recharge" class="c-888">Recharge now</a>
          </p>
        </div>
      </div>
      <!-- End of the investment list -->
    </div>

    <!-- Invest Record -->
    <div class="item-detail-body clearfix mrt30 ui-tab">
      <div class="ui-tab-nav hd">
        <ul>
          <li class="nav_li active">
            <a href="javascript:;">Investment Record</a>
          </li>
        </ul>
      </div>
      <div class="bd">
        <div class="ui-tab-item active" style="display: block;">
          <div class="repayment-list">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tbody>
                <tr>
                  <th>Bidder</th>
                  <th>Bid amount</th>
                  <th>Bid time</th>
                </tr>
              </tbody>
              <tbody id="repayment_content">
                <tr v-for="lendItem in lendItemList" :key="lendItem.id">
                  <td>{{ lendItem.investName }}</td>
                  <td>
                    <span class="c-orange">￥{{ lendItem.investAmount }}</span>
                  </td>
                  <td>{{ lendItem.investTime }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Return plan -->
    <div class="item-detail-body clearfix mrt30 ui-tab">
      <div class="ui-tab-nav hd">
        <ul>
          <li class="nav_li active">
            <a href="javascript:;">Return Plan</a>
          </li>
        </ul>
      </div>
      <div class="bd">
        <div class="ui-tab-item active" style="display: block;">
          <div class="repayment-list">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th>Repayment period</th>
                  <th>Repayment date</th>
                  <th>Principal payable($)</th>
                  <th>Interest payable($)</th>
                  <th>Status</th>
                  <th>Overdue</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody id="repayment_content">
                <tr v-for="lendReturn in lendReturnList" :key="lendReturn.id">
                  <td>{{ lendReturn.currentPeriod }}</td>
                  <td>{{ lendReturn.returnDate }}</td>
                  <td class="c-orange">￥{{ lendReturn.principal }}</td>
                  <td class="c-orange">￥{{ lendReturn.interest }}</td>
                  <td>{{ lendReturn.status === 0 ? 'outstanding' : 'returned' }}</td>
                  <td>
                    <span v-if="lendReturn.overdue">
                      Yes(Overdue amount:${{ lendReturn.overdueTotal }})
                    </span>
                    <span v-else>No</span>
                  </td>
                  <td>
                    <a href="javascript:" @click="commitReturn(lendReturn.id)">
                      {{ lendReturn.status === 0 ? 'Return' : '' }}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Return Plan-->
    <div v-if="userType === 1" class="item-detail-body clearfix mrt30 ui-tab">
      <div class="ui-tab-nav hd">
        <ul>
          <li class="nav_li active">
            <a href="javascript:;">Payment collection plan</a>
          </li>
        </ul>
      </div>
      <div class="bd">
        <div class="ui-tab-item active" style="display: block;">
          <div class="repayment-list">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th>period</th>
                  <th>principal($)</th>
                  <th>interest($)</th>
                  <th>total($)</th>
                  <th>expected collection date</th>
                  <th>real collection date</th>
                  <th>status</th>
                  <th>overdue</th>
                </tr>
              </thead>
              <tbody id="repayment_content">
                <tr
                  v-for="lendItemReturn in lendItemReturnList"
                  :key="lendItemReturn.id"
                >
                  <td>{{ lendItemReturn.currentPeriod }}</td>
                  <td class="c-orange">${{ lendItemReturn.principal }}</td>
                  <td class="c-orange">${{ lendItemReturn.interest }}</td>
                  <td class="c-orange">${{ lendItemReturn.total }}</td>
                  <td>{{ lendItemReturn.returnDate }}</td>
                  <td>{{ lendItemReturn.realReturnTime }}</td>
                  <td>
                    {{ lendItemReturn.status === 0 ? 'outstanding' : 'returned' }}
                  </td>
                  <td>
                    <span v-if="lendItemReturn.overdue">
                      Yes(Overdue amount:${{ lendReturn.overdueTotal }})
                    </span>
                    <span v-else>No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Borrow and Borrower info -->
    <div class="item-detail-body clearfix mrt30 ui-tab">
      <div class="ui-tab-nav hd">
        <ul>
          <li class="nav_li active">
            <a href="javascript:;">Borrow Info</a>
          </li>
        </ul>
      </div>
      <div class="bd">
        <div class="ui-tab-item active" style="display: block;">
          <div class="borrow-info" style="width:auto;">
            <dl class="item">
              <dt>
                <h3>Project introduction</h3>
              </dt>
              <dd>
                <div class="text">
                  <p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">
                    {{ lend.lendInfo }}
                  </p>
                </div>
              </dd>
            </dl>

            <dl class="item">
              <dt>
                <h3>Borrower info</h3>
              </dt>
              <dd>
                <div class="text">
                  <p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">
                    name:{{ borrower.name }} <br />
                    phone:{{ borrower.mobile }} <br />
                    identity authentication:verified <br />
                    Registration time:{{ borrower.createTime }} <br />
                  </p>
                </div>
              </dd>
            </dl>

            <dl class="item">
              <dt>
                <h3>Audit information</h3>
              </dt>
              <dd>
                <div class="verify clearfix" style="width: auto;">
                  <ul>
                    <li>
                      <i class="icon icon-4"></i><br />
                      ID
                    </li>
                    <li>
                      <i class="icon icon-6"></i><br />
                      marriage info
                    </li>
                    <li>
                      <i class="icon icon-7"></i><br />
                      employment
                    </li>
                    <li>
                      <i class="icon icon-8"></i><br />
                      paystub
                    </li>
                    <li>
                      <i class="icon icon-9"></i><br />
                      Income proof
                    </li>
                    <li>
                      <i class="icon icon-10"></i><br />
                      credit report
                    </li>
                    <li>
                      <i class="icon icon-11"></i><br />
                      backgroud
                    </li>
                    <li>
                      <i class="icon icon-19"></i><br />
                      driver license
                    </li>
                    <li>
                      <i class="icon icon-20"></i><br />
                      registration
                    </li>
                    <li>
                      <i class="icon icon-21"></i><br />
                      deed
                    </li>
                    <li>
                      <i class="icon icon-22"></i><br />
                      car insurance
                    </li>
                    <li>
                      <i class="icon icon-23"></i><br />
                      business insurance
                    </li>
                    <li>
                      <i class="icon icon-24"></i><br />
                      Vehicle Evaluation Certification
                    </li>
                  </ul>
                </div>
              </dd>
            </dl>
            <dl class="item">
              <dt>
                <h3>Risk control steps</h3>
              </dt>
              <dd>
                <div class="text">
                  <p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">
                    Investigation: The Risk Control Department conducted a comprehensive telephone credit investigation on the borrower's information, and all the information was true and reliable.
                    <span></span>
                  </p>
                  <p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">
                    Collateral:kia forte,plate number:<span>AYY***</span>,purchase at<span>2013</span>,price<span>20,000</span>,Appraisal price<span>15,000</span>
                  </p>
                  <p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">
                    Warrant: the automobile has been put into storage and relevant formalities have been handled.
                  </p>
                  <p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">
                    Guarantee: pledge guarantee.
                  </p>
                  <p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">
                    Conclusion: This customer is an old customer and has made a loan:<span>40,000</span>,It has been settled, and now the loan is applied for again due to capital turnover. The borrower has a stable residence and a reliable source of income. After comprehensive risk control assessment, the borrower agrees to lend<span>40,000</span>
                  </p>
                  <p class="MsoNormal" style="margin-left:0cm;text-indent:0cm;">
                    Guarantee: overdue loan<span>48</span>hours,The platform shall pay in advance.
                  </p>
                </div>
                <div class="step clearfix">
                  <ul>
                    <li><i class="icon icon-1"></i>Data review</li>
                    <li><i class="icon icon-2"></i>Field investigation</li>
                    <li><i class="icon icon-3"></i>Asset valuation</li>
                    <li class="no"><i class="icon icon-4"></i>Post a loan</li>
                  </ul>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/index.css';
import '~/assets/css/detail.css';
import cookie from 'js-cookie';

export default {
  async asyncData({ $axios, params }) {
    let lendId = params.id;
    let response = await $axios.$get('/api/core/lend/show/' + lendId);
    //invesement record
    let responseLendItemList = await $axios.$get(
      '/api/core/lendItem/list/' + lendId
    );
    //return plan
    let responseLendReturnList = await $axios.$get(
      '/api/core/lendReturn/list/' + lendId
    );

    return {
      lend: response.data.lendDetail.lend,
      borrower: response.data.lendDetail.borrower,
      lendItemList: responseLendItemList.data.list,
      lendReturnList: responseLendReturnList.data.list,
    };
  },

  data() {
    return {
      account: 0, //account balance
      agree: false, //agreement
      invest: {
        lendId: 0, //bid id
        investAmount: 100, //investment amount
      },
      interestCount: 0, //expected amount
      userType: 0, //user type
      lendItemReturnList: [], //payment collection
    };
  },

  //get cookie
  mounted() {
    //check balance 
    this.fetchAccount();
    //user type
    this.fetchUserType();
    //plan type
    this.fetchLendItemReturnList();
  },

  methods: {
    //check account balance
    fetchAccount() {
      let userInfo = cookie.get('userInfo');
      if (userInfo) {
        this.$axios
          .$get('/api/core/userAccount/auth/getAccount')
          .then((response) => {
            this.account = response.data.account;
          });
      }
    },

    //get user type
    fetchUserType() {
      let userInfo = cookie.get('userInfo');
      if (userInfo) {
        userInfo = JSON.parse(userInfo);
        this.userType = userInfo.userType;
      }
    },

    //compute profit
    getInterestCount() {
      this.$axios
        .$get(
          `/api/core/lend/getInterestCount/${this.invest.investAmount}/${this.lend.lendYearRate}/${this.lend.period}/${this.lend.returnMethod}`
        )
        .then((response) => {
          this.interestCount = response.data.interestCount;
        });
    },

    //investment
    commitInvest() {
      //check if user has signed in
      let userInfo = cookie.get('userInfo');
      // console.log(typeof userInfo)
      // console.log(!userInfo) //true
      if (!userInfo) {
        window.location.href = '/login';
        return;
      }

      let userInfoObj = JSON.parse(userInfo);
      if (userInfoObj.userType == 2) {
        //borrower
        this.$message.error('A borrower cannot invest');
        return;
      }

      console.log(this.lend.investAmount);
      console.log(this.invest.investAmount);
      console.log(this.lend.amount);
      //Determine whether the target is oversold
      if (
        this.lend.investAmount + Number(this.invest.investAmount) >
        this.lend.amount
      ) {
        this.$message.error('Insufficient amount to invest');
        return;
      }

      // console.log(this.invest.investAmount)
      // console.log(Number(this.invest.investAmount))
      // console.log(typeof Number(this.invest.investAmount))
      // return
      if (
        Number(this.invest.investAmount) === 0 ||
        this.invest.investAmount % this.lend.lowestAmount != 0
      ) {
        this.$message.error(`The investment amount must be an integer multiple of${this.lend.lowestAmount}`);
        return;
      }

      //check the balance
      if (this.invest.investAmount > this.account) {
        this.$message.error('Insufficient balance, please recharge');
        return;
      }

      //data submit
      this.$alert(
        '<div style="size: 18px;color: red;">You are about to confirm your bid Information</div>',
        'Go to the third-party platform',
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: 'Forward',
          callback: (action) => {
            console.log('action', action);
            if (action === 'confirm') {
              this.invest.lendId = this.lend.id;
              this.$axios
                .$post('/api/core/lendItem/auth/commitInvest', this.invest)
                .then((response) => {
                  // console.log(response.data.formStr)
                  // debugger
                  document.write(response.data.formStr);
                });
            }
          },
        }
      );
    },
    //Payment collection
    fetchLendItemReturnList() {
      this.$axios
        .$get('/api/core/lendItemReturn/auth/list/' + this.$route.params.id)
        .then((response) => {
          this.lendItemReturnList = response.data.list;
        });
    },
    commitReturn(lendReturnId) {
      this.$alert(
        '<div style="size: 18px;color: red;">You are about to confirm your repayment</div>',
        'Go to the third-party platform',
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: 'Forward',
          callback: (action) => {
            if (action === 'confirm') {
              this.$axios
                .$post('/api/core/lendReturn/auth/commitReturn/' + lendReturnId)
                .then((response) => {
                  document.write(response.data.formStr);
                });
            }
          },
        }
      );
    },
  },
};
</script>
