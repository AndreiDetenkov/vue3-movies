<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
}>()

const capitalizedTitle = computed<string>(() => {
  return props.title.charAt(0).toUpperCase() + props.title.slice(1).toLowerCase()
})
</script>

<template>
  <h2 class="mb-8 border-b border-b-gray-800 pb-1 text-3xl font-bold text-gray-800">
    {{ capitalizedTitle }}
  </h2>
</template>
