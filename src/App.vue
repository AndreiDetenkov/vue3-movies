<script setup lang="ts">
import TheFooter from '@/app/components/TheFooter.vue'
import TheHeader from '@/app/components/TheHeader.vue'
</script>

<template>
  <the-header />
  <router-view></router-view>
  <the-footer />
</template>
