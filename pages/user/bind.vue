<template>
  <div class="personal-main">
    <div class="personal-pay">
      <h3><i>Open a third-party account</i></h3>
      <div class="pay-notice">
        <p>
          Please open the deposit account of huifubao to facilitate your normal financial management
        </p>
      </div>
      <div class="pay-form">
        <ul>
          <li>
            <label>Real name</label>
            <input
              v-model="userBind.name"
              type="text"
              class="pay-txt"
              maxlength="16"
              placeholder="Your real name"
            />
          </li>
          <li>
            <label>ID number</label>
            <input
              v-model="userBind.idCard"
              type="text"
              class="pay-txt"
              maxlength="18"
              placeholder="Your ID number"
            />
            <div id="idCardErrorDiv">
              <p style="margin-top:10px;">
                The ID card information cannot be modified after authentication. Please fill in it carefully
              </p>
            </div>
          </li>
          <li>
            <label>Bank name</label>
            <input
              v-model="userBind.bankType"
              type="text"
              class="pay-txt"
              placeholder="Bank name"
            />
          </li>
          <li>
            <label>Bank card</label>
            <input
              v-model="userBind.bankNo"
              type="text"
              class="pay-txt"
              placeholder="Bank card held by yourself"
            />
          </li>
          <li>
            <label>Phone</label>
            <input
              v-model="userBind.mobile"
              type="text"
              class="pay-txt"
              placeholder="Bank card reserved mobile number"
            />
          </li>
          <li>
            <label>&nbsp;</label>
            <input v-model="agree" type="checkbox" />
            I have read and agree
            <a href="#" class="c-orange" target="_blank">
              "Huifubao escrow account agreement"
            </a>
          </li>
          <li>
            <label>&nbsp;</label>
            <el-button :disabled="!agree" @click="commitBind()" type="primary">
              Open account
            </el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      agree: false,
      userBind: {},
    };
  },

  methods: {
    commitBind() {
      this.$alert(
        '<div style="size: 18px;color: red;">You are about to go to huifubao to bind your account</div>',
        'Proceed to huifubao platform',
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: 'Proceed',
          callback: (action) => {
            //TODO
            if (action === 'confirm') {
              this.$axios
                .$post('/api/core/userBind/auth/bind', this.userBind)
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
