import { defineStore } from 'pinia'
import { container } from 'tsyringe'
import type { MovieInterface } from '@/app/movie/infrastructure/services/movie.interface'
import { MoviesService } from '@/app/movie/infrastructure/services/movies.service'

const deps = {
  get service() {
    return container.resolve(MoviesService)
  }
}
export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [] as MovieInterface[]
  }),

  actions: {
    async getPopularMovies(page: number) {
      this.movies = await deps.service.getPopularMovies(page)
    }
  }
})
