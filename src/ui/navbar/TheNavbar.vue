<script setup lang="ts">
import { computed } from 'vue'

import NavbarLink from '../navbar-link/NavbarLink.vue'
import ToggleTheme from '../toggle-theme/ToggleTheme.vue'
import { type MenuInterface, web_route } from './types'

const menu = computed<MenuInterface[]>(() => {
  return [{ title: 'movies', url: web_route.movies }]
})
</script>

<template>
  <nav class="border-b dark:border-b-gray-600">
    <div class="container mx-auto">
      <div class="flex justify-between items-center h-12">
        <div class="logo"><router-link to="/">Logo</router-link></div>
        <navbar-link v-for="item in menu" :key="item.title" :item="item" />
        <toggle-theme />
      </div>
    </div>
  </nav>
</template>
