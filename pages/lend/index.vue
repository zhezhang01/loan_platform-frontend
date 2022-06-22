<template>
  <!--list-->
  <div class="page-filter wrap">
    <div class="breadcrumbs">
      <a href="index.html">HomePage</a>&gt;<span class="cur">Investment list</span>
    </div>
    <div class="invest-filter" data-target="sideMenu">
      <div class="filter-inner clearfix">
        <div class="filter-item">
          <div class="hd">
            <h3>Screening investment projects</h3>
            <label>
              <input id="filterMulti" name="multiple_choice" type="checkbox" />
              Multiple choice</label
            >
          </div>
          <div class="bd">
            <dl>
              <dt>Loan type</dt>
              <dd>
                <ul>
                  <li class="n1">
                    <a
                      href="javascript:url('post_type','');"
                      id="post_type_"
                      class="active"
                      >unlimited</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      href="javascript:url('post_type','car');"
                      id="post_type_car"
                      >Vehicle loan</a
                    >
                  </li>
                  <li class="n3">
                    <a
                      href="javascript:url('post_type','house');"
                      id="post_type_house"
                      >Housing loan</a
                    >
                  </li>
                  <li class="n4">
                    <a
                      href="javascript:url('post_type','bridge');"
                      id="post_type_bridge"
                      >Debt Loan</a
                    >
                  </li>
                  <li class="n5">
                    <a
                      href="javascript:url('post_type','worth');"
                      id="post_type_worth"
                      >Others</a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>APR</dt>
              <dd>
                <ul>
                  <li class="n1">
                    <a
                      href="javascript:url('borrow_interestrate','');"
                      id="borrow_interestrate_"
                      class="active"
                      >unlimited</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      id="borrow_interestrate_1"
                      href="javascript:url('borrow_interestrate','1');"
                      >&lt;12%</a
                    >
                  </li>
                  <li class="n3">
                    <a
                      id="borrow_interestrate_2"
                      href="javascript:url('borrow_interestrate','2');"
                      >12%-14%</a
                    >
                  </li>
                  <li class="n4">
                    <a
                      id="borrow_interestrate_3"
                      href="javascript:url('borrow_interestrate','3');"
                      >14%-16%</a
                    >
                  </li>
                  <li class="n5">
                    <a
                      id="borrow_interestrate_4"
                      href="javascript:url('borrow_interestrate','4');"
                      >>=16%</a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>Repayment time</dt>
              <dd>
                <ul>
                  <li class="n1">
                    <a
                      href="javascript:url('spread_month','');"
                      id="spread_month_"
                      class="active"
                      >umlimited</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      id="spread_month_1"
                      href="javascript:url('spread_month','1');"
                      >&lt;1 mon</a
                    >
                  </li>
                  <li class="n3">
                    <a
                      id="spread_month_2"
                      href="javascript:url('spread_month','2');"
                      >1-3mon</a
                    >
                  </li>
                  <li class="n4">
                    <a
                      id="spread_month_3"
                      href="javascript:url('spread_month','3');"
                      >3-6mon</a
                    >
                  </li>
                  <li class="n5">
                    <a
                      id="spread_month_4"
                      href="javascript:url('spread_month','4');"
                      >6-12mon</a
                    >
                  </li>
                  <li class="n6">
                    <a
                      id="spread_month_5"
                      href="javascript:url('spread_month','5');"
                      >>=12mon</a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="repayment">
              <dt>Repayment method</dt>
              <dd>
                <ul>
                  <li class="n1">
                    <a
                      href="javascript:url('repay_style','');"
                      id="repay_style_"
                      class="active"
                      >unlimited</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      id="repay_style_end"
                      href="javascript:url('repay_style','end');"
                      >Repay the principal and interest</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      id="repay_style_endmonth"
                      href="javascript:url('repay_style','endmonth');"
                      >Monthly interest payment</a
                    >
                  </li>
                  <li class="n2">
                    <a
                      id="repay_style_month"
                      href="javascript:url('repay_style','month');"
                      >Others</a
                    >
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
        <div class="common-problem">
          <h3>Q&A</h3>
          <ul>
            <li><a href="#">What is a debt loan?</a></li>
            <li><a href="#">Instructions on the "debt loan"</a></li>
            <li><a href="#">Charging standard for financial product</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="invest-list mrt30 clearfix">
      <div class="hd">
        <h3>Investment list</h3>
        <div class="count">
          <ul>
            <li class="line">
              Investment transaction amount&nbsp;&nbsp;<span class="f20 bold"
                >7.354 billion</span
              >
            </li>
            <li>
              Accumulated earned profit&nbsp;&nbsp;<span class="f20 bold">252 million</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="bd">
        <div class="invest-table clearfix">
          <div class="title clearfix">
            <ul>
              <li class="col-330">Title</li>
              <li class="col-180">
                <a href="javascript:url('order','account_up');" class=""
                  >Loan amount</a
                >
              </li>
              <li class="col-110">
                <a href="javascript:url('order','apr_up');" class="">APR</a>
              </li>
              <li class="col-150">
                <a href="javascript:url('order','period_up');" class=""
                  >Loan term</a
                >
              </li>
              <li class="col-150">Repayment method</li>
              <li class="col-120">
                <a href="javascript:url('order','scale_up');" class=""
                  >Loan progress</a
                >
              </li>
              <li class="col-120-t">operation</li>
            </ul>
          </div>
          <!------------list-------------->
          <div class="item" v-for="lend in lendList" :key="lend.id">
            <ul>
              <li class="col-330 col-t">
                <NuxtLink :to="'/lend/' + lend.id" target="_blank">
                  <i class="icon icon-zhai"></i>
                </NuxtLink>
                <NuxtLink
                  class="f18"
                  :to="'/lend/' + lend.id"
                  :title="lend.title"
                  target="_blank"
                >
                  {{ lend.title }}
                </NuxtLink>
              </li>
              <li class="col-180">
                <span class="f20 c-333"> ${{ lend.amount }} </span>
              </li>
              <li class="col-110 relative">
                <span class="f20 c-orange">
                  {{ lend.lendYearRate * 100 }}%
                </span>
              </li>
              <li class="col-150">
                <span class="f20 c-333">{{ lend.period }}mon</span>
              </li>
              <li class="col-150">{{ lend.param.returnMethod }}</li>
              <li class="col-120">
                <div class="circle">
                  <div class="left progress-bar">
                    <!-- <div
                      :class="
                        'progress-bgPic progress-bfb' +
                          Math.floor((lend.investAmount / lend.amount) * 10)
                      "
                    > -->
                    <div
                      :class="
                        'progress-bgPic progress-bfb' +
                          Math.floor((lend.investAmount / lend.amount) * 10)
                      "
                    >
                      <div class="show-bar">
                        {{ (lend.investAmount / lend.amount) * 100 }}%
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="col-120-2">
                <NuxtLink
                  class="ui-btn btn-gray"
                  :to="'/lend/' + lend.id"
                  target="_blank"
                >
                  {{ lend.param.status }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!------------list-------------->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/index.css';
import '~/assets/css/detail.css';
export default {
  async asyncData({ $axios }) {
    let response = await $axios.$get('/api/core/lend/list');
    return {
      lendList: response.data.lendList,
    };
  },
};
</script>
