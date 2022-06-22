<template>
  <!--sign up-->
  <div class="wrap">
    <div v-if="step === 1" class="tdbModule register">
      <div class="registerTitle">User sign up</div>
      <div class="registerLc1">
        <p class="p1">fill in account information</p>
        <p class="p2">Registration success</p>
      </div>

      <div class="registerCont">
        <ul>
          <li>
            <span class="dis"></span>
            <input v-model="userInfo.userType" type="radio" value="1" />
            investor
            <input v-model="userInfo.userType" type="radio" value="2" />
            borrower
          </li>
          <li class="telNumber">
            <span class="dis">phone number</span>
            <input class="input" v-model="userInfo.mobile" />
            <button v-if="!sending" class="button" @click="send()">
              Get verification code
            </button>
            <button v-else disabled class="button disabled">
              Resned in{{ leftSecond }}seconds
            </button>
          </li>

          <li>
            <span class="dis">SMS verification code</span>
            <input class="input" v-model="userInfo.code" />
            <span class="info">
              Please enter the verification code
            </span>
          </li>

          <li>
            <span class="dis">password</span>
            <input type="password" v-model="userInfo.password" class="input" />
            <span class="info">
              6-24 characters, composed of English and numbers.
            </span>
          </li>

          <li class="agree">
            <input type="checkbox" checked />
            I agree 《<NuxtLink to="#" target="_black">registration agreement</NuxtLink>》
            <span>Please review the agreement</span>
          </li>
          <li class="btn">
            <button @click="register()">
              Next step
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="step === 2" class="tdbModule register">
      <div class="registerTitle">register account</div>
      <div class="registerLc2">
        <p class="p1">fill in account information</p>
        <p class="p2">registration success</p>
      </div>
      <div class="registerCont">
        <ul>
          <li class="scses">
            {{ this.userInfo.mobile }} Congratulations on your successful registration!
            <NuxtLink class="blue" to="/login">
              Please sign in
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/register.css';
export default {
  data() {
    return {
      step: 1,
      userInfo: {
        userType: 1,
      },
      sending: false,
      second: 10,
      leftSecond: 0,
    };
  },

  methods: {
    //send message
    send() {
      if (!this.userInfo.mobile) {
        this.$message.error('please type in the phone number');
        return;
      }

      // After clicking to get the verification code, disable the button to prevent repeated submissions
      if (this.sending) {
        return;
      }
      this.sending = true;

      this.timeDown();

      this.$axios
        .$get('/api/sms/send/' + this.userInfo.mobile)
        .then((response) => {
          this.$message.success(response.message);
        });
    },

    timeDown() {
      console.log('start counting down');
      this.leftSecond = this.second;

      const timer = setInterval(() => {
        this.leftSecond--;
        if (this.leftSecond <= 0) {
          clearInterval(timer);
          this.sending = false;
        }
      }, 1000);
    },

    register() {
      this.$axios
        .$post('/api/core/userInfo/register', this.userInfo)
        .then((response) => {
          this.step = 2;
        });
    },
  },
};
</script>
