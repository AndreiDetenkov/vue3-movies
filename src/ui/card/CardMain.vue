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
      class="rounded-md mb-3"
    />
    <p class="text-lg font-bold truncate mb-1 hover:underline">
      {{ movie.title }}
    </p>
    <p class="font-medium text-xs text-gray-500">{{ movie.release_date }} &#x2022;</p>
    <card-rate :rate="movie?.vote_average" />
  </div>
</template>
