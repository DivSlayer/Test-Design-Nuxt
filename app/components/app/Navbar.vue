
<script lang="ts" setup>
import NavigationLinks from '~/components/partials/NavigationLinks.vue'
import type { NavItem } from '~/utils/types'

const navs: NavItem[] = [
  {
    title: 'نحوه‌ کارکرد',
    link: '#cta-sec',
  },
  {
    title: 'تماس با ما',
    link: '/',
  },
  {
    title: 'درباره ما',
    link: '/',
  },
]

const openMenu = ref<boolean>(false)
</script>

<template>
  <header class="site-header">
    <div class="container inner">
      <div class="brand">
        <img src="../../assets/images/logo.png" alt="logo"/>
      </div>

      <NavigationLinks :navs="navs" class="navlinks" />

      <div class="actions">
        <button class="header-btn">ورود / عضویت</button>
      </div>

      <div class="menu-trigger">
        <label class="hamburger-menu">
          <input type="checkbox" v-model="openMenu" />
        </label>
      </div>

      <NavigationLinks :navs="navs" :class="['mobile-menu', { active: openMenu }]" />
    </div>
  </header>
</template>
