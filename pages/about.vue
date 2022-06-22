<template>
  <!--About us-->
  <div class="bg">
    <div class="contain" id="tabs" style="margin:0 auto;">
      <div class="text-nav">
        <ul class="clearfix">
          <li :class="{ selected: $route.fullPath === '/about' }">
            <NuxtLink class="text-link" to="/about">Contact us</NuxtLink>
          </li>
          <li :class="{ selected: $route.fullPath === '/about/report' }">
            <NuxtLink class="text-link" to="/about/report">Announcement</NuxtLink>
          </li>
          <li :class="{ selected: $route.fullPath === '/about/profile' }">
            <NuxtLink class="text-link" to="/about/profile">Company profile</NuxtLink>
          </li>
          <li :class="{ selected: $route.fullPath === '/about/leader' }">
            <NuxtLink class="text-link" to="/about/leader">Management team</NuxtLink>
          </li>
          <li :class="{ selected: $route.fullPath === '/about/partner' }">
            <NuxtLink class="text-link" to="/about/partner">Partners</NuxtLink>
          </li>
          <li :class="{ selected: $route.fullPath === '/about/team' }">
            <NuxtLink class="text-link" to="/about/team">Team style</NuxtLink>
          </li>
          <li :class="{ selected: $route.fullPath === '/about/policy' }">
            <NuxtLink class="text-link" to="/about/policy">Legal policy</NuxtLink>
          </li>
          <li :class="{ selected: $route.fullPath === '/about/notice' }">
            <NuxtLink class="text-link" to="/about/notice">Legal declaration</NuxtLink>
          </li>
          <li :class="{ selected: $route.fullPath === '/about/price' }">
            <NuxtLink class="text-link" to="/about/price">Charge description</NuxtLink>
          </li>
          <li :class="{ selected: $route.fullPath === '/about/job' }">
            <NuxtLink class="text-link" to="/about/job">Other info</NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtChild />
    </div>
  </div>
</template>

<script>
import '~/assets/css/about.css'

export default {}
</script>
