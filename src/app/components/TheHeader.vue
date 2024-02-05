<script setup lang="ts">
import NavbarLink from '@/app/components/NavbarLink/NavbarLink.vue'
import { computed } from 'vue'

const menu = computed(() => {
  return [{ title: 'movies', url: '/' }]
})
</script>

<template>
  <div class="container h-12">
    <nav class="flex items-center justify-between">
      <router-link to="/">Movies_app.</router-link>

      <div class="flex">
        <ul>
          <li v-for="item in menu" :key="item.title">
            <navbar-link :item="item" />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
