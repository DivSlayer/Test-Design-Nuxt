<script setup lang="ts">
import type { NavItem } from '~/utils/types'

interface Props {
  navs: NavItem[]
  className?: string
}

defineProps<Props>()
</script>

<template>
  <nav :class="className" aria-label="Main navigation">
    <a 
      v-for="(nav_item, index) in navs" 
      :key="index"
      :href="nav_item.link"
    >
      {{ nav_item.title }}
    </a>
  </nav>
</template>
