import { defineStore } from 'pinia'
import { container } from 'tsyringe'

import { MoviesController } from '@/app/movie/infrastructure/view/movies.controller'

const deps = {
  get service() {
    return container.resolve(MoviesController)
  }
}
export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: []
  }),

  actions: {
    async getPopularMovies(page: number) {
      await deps.service.getPopularMovies(page)
    }
  }
})
