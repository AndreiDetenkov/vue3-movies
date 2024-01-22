import { autowired, reflection } from 'first-di'

import type { Movie } from '@/app/movie/domain/movie'
import type { MovieInterface } from '@/app/movie/domain/movie.interface'

import type { MoviesRepository } from '@/app/movie/infrastructure/repository/movies.repository'

@reflection
export class MoviesService implements Movie {
  @autowired()
  private getMoviesRepository!: MoviesRepository

  get(page: number): Promise<MovieInterface[] | null> {
    return this.getMoviesRepository.getPopularMovies(page)
  }
}
