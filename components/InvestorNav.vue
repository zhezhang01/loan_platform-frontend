<template>
  <ul>
    <li :class="{ 'pleft-cur': $route.fullPath === '/user' }">
      <span>
        <NuxtLink to="/user"> <i class="dot dot1"></i>Account overview</NuxtLink>
      </span>
    </li>
    <li :class="{ 'pleft-cur': $route.fullPath === '/user/fund' }">
      <span>
        <NuxtLink style="text-align:center;width:115px;" to="/user/fund">
          Fund records
        </NuxtLink>
      </span>
    </li>
    <li :class="{ 'pleft-cur': $route.fullPath === '/user/invest' }">
      <span>
        <NuxtLink style="text-align:center;width:115px;" to="/user/invest">
          Investment records
        </NuxtLink>
      </span>
    </li>
    <li :class="{ 'pleft-cur': $route.fullPath === '/user/payment' }">
      <span>
        <NuxtLink style="text-align:center;width:115px;" to="/user/payment">
          Return plan
        </NuxtLink>
      </span>
    </li>
    <li :class="{ 'pleft-cur': $route.fullPath === '/user/recharge' }">
      <span
        ><NuxtLink to="/user/recharge"
          ><i class="dot dot03"></i>Recharge</NuxtLink
        ></span
      >
    </li>
    <li :class="{ 'pleft-cur': $route.fullPath === '/user/withdraw' }">
      <span
        ><NuxtLink to="/user/withdraw"
          ><i class="dot dot04"></i>Withdrawal</NuxtLink
        ></span
      >
    </li>
  </ul>
</template>

<script>
export default {}
</script>
