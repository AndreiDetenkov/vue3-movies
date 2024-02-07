<script setup lang="ts">
import { ref } from 'vue'
import { useMoviesStore } from '@/app/movie/infrastructure/store/movies.store'

const page = ref(1)
const moviesStore = useMoviesStore()

const getPopularHandler = async () => {
  console.log('getPopularHandler')
  await moviesStore.getPopularMovies(page.value)
}

const getTopRatedHandler = async () => {
  console.log('getTopRatedHandler')
}
</script>

<template>
  <div class="container">
    <h1 class="mb-4 text-3xl font-bold">Movies</h1>

    <div class="flex gap-4">
      <button class="rounded border px-6 py-2 hover:opacity-50" @click="getPopularHandler">
        Get Popular
      </button>

      <button class="rounded border px-6 py-2 hover:opacity-50" @click="getTopRatedHandler">
        Get TopRated
      </button>
    </div>
  </div>
</template>
