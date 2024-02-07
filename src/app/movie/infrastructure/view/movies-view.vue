<script setup lang="ts">
import { ref } from 'vue'
import { useMoviesStore } from '@/app/movie/infrastructure/store/movies.store'

const page = ref(1)
const moviesStore = useMoviesStore()

const clickHandler = async () => {
  await moviesStore.getPopularMovies(page.value)
}
</script>

<template>
  <div class="container">
    <button class="rounded border px-8 py-3 hover:opacity-50" @click="clickHandler">
      Get Popular Movies
    </button>
  </div>
</template>
