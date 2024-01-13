<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button @click="toggleDark()">
    <i-carbon-sun v-if="isDark" />
    <i-carbon-moon v-else />
  </button>
</template>

<style scoped lang="scss"></style>
