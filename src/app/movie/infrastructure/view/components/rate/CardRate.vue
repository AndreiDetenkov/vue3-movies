<script setup lang="ts">
defineProps<{
  rate: number | string
}>()
</script>

<template>
  <div
    class="absolute -right-2 bottom-14 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white"
  >
    {{ rate }}
  </div>
</template>
