<script setup lang="ts">
import NavbarLink from '@/app/components/NavbarLink/NavbarLink.vue'
import { computed } from 'vue'

const menu = computed(() => {
  return [
    { title: 'Movies', url: '/movies' },
    { title: 'TV Series', url: '/tv' }
  ]
})
</script>

<template>
  <div class="container h-12">
    <nav class="flex h-full items-center justify-between">
      <router-link to="/">Movies_app.</router-link>

      <div class="flex">
        <ul class="flex items-center gap-4">
          <li v-for="item in menu" :key="item.title">
            <navbar-link :item="item" />
          </li>
        </ul>
      </div>

      <div>Profile</div>
    </nav>
  </div>
</template>
