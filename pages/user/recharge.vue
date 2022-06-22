<template>
  <div class="personal-main">
    <div class="personal-pay">
      <h3><i>Recharge</i></h3>
      <div class="quick-pay-wrap">
        <h4>
          <span class="quick-tit pay-cur"><em>Recharge</em></span>
        </h4>
        <form id="form" name="form" method="post" action="">
          <div class="quick-main">
            <div class="fl quick-info">
              <div class="info-1">
                <span class="info-tit">Recharge amount</span>
                <span class="info1-input">
                  <input
                    type="text"
                    class="pay-money-txt"
                    maxlength="10"
                    v-model="chargeAmt"
                  />
                  <em>$</em>
                </span>
              </div>
              <div class="bank-check" id="bank-check2">
                <b class="selected" id="bankProtocol1"></b>
                <span class="bank-agree">
                  I agree and accept
                  <a href="#" target="_blank">
                    《Electronic agreement for investment consulting and management services of srb》
                  </a>
                </span>
              </div>
              <input
                type="button"
                value="Recharge"
                class="btn-paycz"
                @click="commitCharge()"
              />
            </div>

            <div class="pay-tipcon" style="height: 110px;">
              <b>Tips:</b><br />
              1.For the safety of your funds, your account funds are entrusted by a third party hfb.<br />
              2.Please pay attention to your bank card recharge limit before recharging to avoid inconvenience.<br />
              3.For your fund security, it is recommended to conduct real name authentication before recharging.<br />
              4.If you encounter any problems during the process, please contact customer service: 400-000-0000.
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chargeAmt: 0,
    };
  },
  methods: {
    commitCharge() {
      this.$alert(
        '<div style="size: 18px;color: red;">You are about to go to huifubao</div>',
        'Go to huifubao fund custody platform',
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: 'Proceed',
          callback: (action) => {
            if (action === 'confirm') {
              // call the backend
              this.$axios
                .$post(
                  '/api/core/userAccount/auth/commitCharge/' + this.chargeAmt
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
