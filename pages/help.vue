<template>
  <div>
    <!--Help center-->
    <div class="banner">
      <img src="~/assets/images/help-banner.png" alt="" />
    </div>
    <div class="content help-content">
      <dl>
        <dt>
          <ul class="content-tab">
            <li :class="{ sel: show === 1 }" @click="change(1)">Security assurance</li>
            <li :class="{ sel: show === 2 }" @click="change(2)">I need invest</li>
            <li :class="{ sel: show === 3 }" @click="change(3)">I need borrow</li>
            <li :class="{ sel: show === 4 }" @click="change(4)">My account</li>
            <li :class="{ sel: show === 5 }" @click="change(5)">Explanation of terms</li>
          </ul>
        </dt>
        <dd v-if="show === 1" class="question-list-wrap" style="display:block">
          <ul>
            <li class="question">
              <dl>
                <dt>Principal guarantee plan</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Legal compliance guarantee</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Risk control guarantee</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Account security</dt>
              </dl>
            </li>
          </ul>
        </dd>
        <dd v-if="show === 2" class="question-list-wrap" style="display:block">
          <ul>
            <li class="question">
              <dl>
                <dt>How to tender?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What should I pay attention to before tendering?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Why is the repayment information not displayed correctly?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What if the borrower repays early?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Can I get the money back in advance?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>How to receive repayment?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>How will the platform collect the borrower's overdue repayment?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What if the borrower fails to repay on time?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What is an online credit beacon?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What is a Vehicle Mortgage Tender?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What is a House Mortgage Tender?</dt>
              </dl>
            </li>
          </ul>
        </dd>
        <dd v-if="show === 3" class="question-list-wrap" style="display:block">
          <ul>
            <li class="question">
              <dl>
                <dt>How to apply for a loan?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What is the borrowing rate?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Do I need to pay a fee before borrowing?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>How to determine the loan limit?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Why was my bid application rejecteds</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>If the application is not approved, will the application materials be returned?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Why didn't it pass the audit?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Why didn't it pass the audit?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>How long does it take to review the loan?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>How to get the money after the loan is successful?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>How can I get a loan successfully?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Can I apply for early repayment?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What is the penalty for overdue repayment?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What will happen if the payment is overdue for more than 30 days?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>How to repay?</dt>
              </dl>
            </li>
          </ul>
        </dd>
        <dd v-if="show === 4" class="question-list-wrap" style="display:block">
          <ul>
            <li class="question">
              <dl>
                <dt>How to register at the platform?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>How do I retrieve my login password?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What is a transaction password? How to modify?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>How can I make my account password more secure?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Why is the available cash amount inconsistent with the available balance?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Why did my recharge fail?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>Why does my recharge have a limit?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>How long will it take for the withdrawal to arrive?</dt>
              </dl>
            </li>
            <li class="question">
              <dl>
                <dt>What are the rules for the use of investment integral?</dt>
              </dl>
            </li>
          </ul>
        </dd>
        <dd v-if="show === 5" class="question-list-wrap" style="display:block">
          <ul>
            <li class="question">
              <dl>
                <dt>common nouns</dt>
              </dl>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import '~/assets/css/help.css'
export default {
  data() {
    return { show: 1 }
  },

  methods: {
    change(value) {
      this.show = value
    },
  },
}
</script>
