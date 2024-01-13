<script setup lang="ts">
defineProps<{
  rate: number | string
}>()
</script>

<template>
  <div
    class="w-8 h-8 absolute bottom-14 -right-2 bg-orange-500 text-sm text-white font-bold rounded-full flex items-center justify-center"
  >
    {{ rate }}
  </div>
</template>
