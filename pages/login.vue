<template>
  <!--Sign in-->
  <div class="wrap">
    <div class="tdbModule loginPage">
      <div class="registerTitle">User Login</div>
      <div class="registerCont">
        <ul>
          <li>
            <span class="dis"></span>
            <input v-model="userInfo.userType" type="radio" value="1" />
            investor
            <input v-model="userInfo.userType" type="radio" value="2" />
            borrower
          </li>
          <li>
            <span class="dis">phone number:</span>
            <input class="input" v-model="userInfo.mobile" />
          </li>

          <li>
            <span class="dis">password:</span>
            <input class="input" v-model="userInfo.password" type="password" />
          </li>
          <li class="btn">
            <button @click="login()" :class="{ disabled: !isValid }">
              Sign in
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/register.css';
import cookie from 'js-cookie';

export default {
  data() {
    return {
      userInfo: {
        userType: 1,
      },
      isValid: true,
    };
  },

  methods: {
    login() {
      this.$axios
        .$post('/api/core/userInfo/login', this.userInfo)
        .then((response) => {
          cookie.set('userInfo', response.data.userInfo);
          window.location.href = '/user';
        });
    },
  },
};
</script>
