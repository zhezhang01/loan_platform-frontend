<template>
  <div class="personal-main">
    <div class="personal-deposit">
      <h3><i>Withdrawal</i></h3>

      <div
        class="deposit-form"
        style="margin-top:0px;border-top:0px none;width:auto;height:240px;"
      >
        <h6>Fill in withdrawal amount</h6>
        <ul>
          <li>
            <span class="deposit-formleft">Amount</span>
            <span class="deposit-formright">
              $<input
                v-model="fetchAmt"
                type="text"
                class="deposite-txt"
                maxlength="10"
              />
            </span>
          </li>
          <li>
            <span class="deposit-formleft">service fee</span>
            <em id="txfy" class="markicon fl"></em>
            <span class="deposit-formright deposit-formright1">
              <i> $<label id="form:fee"> 0.00</label> </i>
            </span>
          </li>
          <li>
            <input
              type="submit"
              value="withdrawal"
              class="btn-depositok"
              @click="commitWithdraw()"
            />
          </li>
        </ul>
      </div>
      <div class="deposit-tip" style="height: 110px;line-height: 24px;">
        <b>Tips:</b><br />
        1.For the safety of your funds, your account funds are entrusted by a third party hfb.<br />
        2.Please pay attention to your bank card recharge limit before recharging to avoid inconvenience.<br />
        3.For your fund security, it is recommended to conduct real name authentication before recharging.<br />
        4.If you encounter any problems during the process, please contact customer service: 400-000-0000.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fetchAmt: 0,
    };
  },

  methods: {
    commitWithdraw() {
      this.$alert(
        '<div style="size: 18px;color: red;">You are about to go to hrb platform to withdraw cash</div>',
        'Go to hfb fund custody platform',
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: 'Proceed',
          callback: (action) => {
            if (action === 'confirm') {
              this.$axios
                .$post(
                  '/api/core/userAccount/auth/commitWithdraw/' + this.fetchAmt
                )
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
