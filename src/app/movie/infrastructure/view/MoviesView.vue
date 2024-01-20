<script setup lang="ts">
import { onMounted, type PropType } from 'vue'
import { MoviesController } from '@/app/movie/infrastructure/controllers/movies.controller'

const props = defineProps({
  movieController: {
    type: Object as PropType<MoviesController>,
    default: () => new MoviesController()
  }
})

onMounted(() => props.movieController.getPopularMoviesByPage(1))
</script>

<template>
  <h1>Movies</h1>
</template>
