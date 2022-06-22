<template>
  <header>
    <div class="header-top min-width">
      <div class="container fn-clear">
        <strong class="fn-left">
          Contact us:400-000-0000
          <span class="s-time">Service time: 9:00 - 18:00</span>
        </strong>
        <ul class="header_contact">
          <li class="c_1">
            <a class="ico_head_weixin" id="wx"></a>
          </li>
          <li class="c_2">
            <a href="#" target="_blank" title="官方QQ" alt="官方QQ">
              <b class="ico_head_QQ"></b>
            </a>
          </li>
          <li class="c_4">
            <a href="#" target="_blank" title="新浪微博" alt="新浪微博">
              <b class="ico_head_sina"></b>
            </a>
          </li>
        </ul>

        <!-- Not signed in -->
        <ul v-if="!userInfo" class="fn-right header-top-ul">
          <!-- <li><a href="" :class="'c-orange'">test</a></li> -->
          <li>
            <NuxtLink to="/" :class="{ 'c-orange': $route.fullPath === '/' }"
              >Homepage</NuxtLink
            >
          </li>
          <li>
            <div class="">
              <NuxtLink
                to="/register"
                :class="{ 'c-orange': $route.fullPath === '/register' }"
              >
                Sign up
              </NuxtLink>
            </div>
          </li>
          <li>
            <div class="">
              <NuxtLink
                to="/login"
                :class="{ 'c-orange': $route.fullPath === '/login' }"
              >
                Sign in
              </NuxtLink>
            </div>
          </li>
        </ul>

        <!-- User has loggined in -->
        <ul v-if="userInfo" class="fn-right header-top-ul">
          <li><NuxtLink to="/" class="app">HomePage</NuxtLink></li>
          <li>
            <div class="">
              <NuxtLink to="/user" class="user" title="我的账户">
                <i class="el-icon-user-solid">{{ userInfo.nickName }}</i>
              </NuxtLink>
            </div>
          </li>
          <li>
            <div class="">
              <a
                href="javascript:void(0)"
                class="js-login"
                @click="logout()"
                title="Logout"
              >
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="header min-width">
      <div class="container">
        <div class="fn-left logo">
          <NuxtLink to="/">
            <img src="~/assets/images/logo.png" title="" />
          </NuxtLink>
        </div>
        <ul class="top-nav fn-clear">
          <li :class="{ on: $route.fullPath === '/' }">
            <NuxtLink to="/">HomePage</NuxtLink>
          </li>
          <li :class="{ on: $route.fullPath === '/list' }">
            <NuxtLink to="/lend"> I need invest </NuxtLink>
          </li>
          <li :class="{ on: $route.fullPath === '/help' }">
            <NuxtLink to="/help">Security assurance</NuxtLink>
          </li>
          <li :class="{ on: $route.fullPath === '/about' }">
            <NuxtLink to="/about">About us</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
import '~/assets/font/iconfont.css';
import cookie from 'js-cookie';

export default {
  data() {
    return {
      userInfo: null,
    };
  },

  mounted() {
    this.showInfo();
  },

  methods: {
    //show user's info
    showInfo() {
      // Determine whether the current cookie contains user information
      let userInfo = cookie.get('userInfo');
      if (!userInfo) {
        this.userInfo = null;
        return;
      }
      userInfo = JSON.parse(userInfo);
      // verify if token legal
      this.$axios({
        url: '/api/core/userInfo/checkToken',
        method: 'get',
        headers: {
          token: userInfo.token,
        },
      }).then((response) => {
        console.log('success');
        this.userInfo = userInfo;
      });
    },

    //Log out
    logout() {
      // clear tokons in the Cookie
      cookie.set('userInfo', '');
      // jump back to the login page
      window.location.href = '/login';
    },
  },
};
</script>
