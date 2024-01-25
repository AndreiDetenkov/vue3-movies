<script setup lang="ts">
import { IMG_URL } from '@/shared/config'
import type { MovieInterface } from './types'
import CardRate from '../rate/CardRate.vue'

defineProps<{
  movie: MovieInterface
}>()
</script>

<template>
  <div class="relative cursor-pointer">
    <img
      :src="`${IMG_URL}/t/p/w300${movie.poster_path}`"
      alt="poster image"
      class="mb-3 rounded-md"
    />
    <p class="mb-1 truncate text-lg font-bold hover:underline">
      {{ movie.title }}
    </p>
    <p class="text-xs font-medium text-gray-500">{{ movie.release_date }} &#x2022;</p>
    <card-rate :rate="movie?.vote_average" />
  </div>
</template>
