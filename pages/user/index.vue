<template>
  <div class="personal-main">
    <div class="pmain-profile">
      <div class="pmain-welcome">
        <span class="fr">Last Login time: {{ userIndexVO.lastLoginTime }} </span>
      </div>
      <div class="pmain-user">
        <div class="user-head">
          <span class="head-img">
            <span>
              <img
                :src="userIndexVO.headImg"
                style="width:88px;height:88px;z-index:0;"
              />
              <i class="headframe" style="z-index:0;"></i>
            </span>
          </span>
        </div>
        <div class="user-info">
          <ul>
            <li>
              Username:<span>{{ userIndexVO.name }}</span>
              <NuxtLink
                v-if="
                  userIndexVO.userType === 2 && userIndexVO.bindStatus === 1
                "
                to="/user/borrower"
              >
                start borrowing
              </NuxtLink>
            </li>
            <li v-if="userIndexVO.bindStatus !== 1">
              You have not activated a third-party payment account, please
              <NuxtLink to="/user/bind">activate now</NuxtLink>
              to ensure your normal use and fund security.
            </li>
          </ul>
        </div>
      </div>

      <div v-if="userIndexVO.bindStatus === 1" class="pmain-money">
        <ul>
          <li class="none">
            <span>
              <em>Account balance</em>
              <i class="markicon"></i>
            </span>
            <span class="truemoney">
              <i class="f26 fb">${{ userIndexVO.amount }}</i>
            </span>
          </li>
          <li>
            <span>
              <em>Frozen amount</em>
              <i class="markicon"></i>
            </span>
            <span class="truemoney">
              <i class="f26 fb">${{ userIndexVO.freezeAmount }}</i
              >
            </span>
          </li>
          <li>
            <NuxtLink to="/user/recharge">
              <el-button size="mini" type="danger">Recharge</el-button>
            </NuxtLink>
            <NuxtLink to="/user/withdraw">
              <el-button size="mini" type="success">Withdrawal</el-button>
            </NuxtLink>
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
      userIndexVO: {},
    };
  },

  created() {
    this.fetchUserData();
  },

  methods: {
    fetchUserData() {
      this.$axios
        .$get('/api/core/userInfo/auth/getIndexUserInfo')
        .then((response) => {
          this.userIndexVO = response.data.userIndexVO;
        });
    },
  },
};
</script>
