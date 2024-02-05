<script setup lang="ts">
import { computed } from 'vue'

import NavbarLink from '../navbar-link/NavbarLink.vue'

const menu = computed<
  {
    title: string
    url: string
  }[]
>(() => {
  return [{ title: 'movies', url: '/' }]
})
</script>

<template>
  <nav class="border-b dark:border-b-gray-600">
    <div class="container">
      <div class="flex h-12 items-center justify-between">
        <div class="logo">
          <router-link to="/">Movies_app.</router-link>
        </div>

        <div>
          <navbar-link v-for="item in menu" :key="item.title" :item="item" />
          <!--          <toggle-theme />-->
        </div>
      </div>
    </div>
  </nav>
</template>
