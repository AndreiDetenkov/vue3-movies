import { autowired, reflection } from 'first-di'

import type { Movie } from '@/app/movie/domain/movie'
import type { MovieInterface } from '@/app/movie/domain/movie.interface'

import type { GetMoviesRepository } from '@/app/movie/infrastructure/repository/get-movies.repository'

@reflection
export class GetMoviesService implements Movie {
  @autowired()
  private getMoviesRepository!: GetMoviesRepository

  get(page: number): Promise<MovieInterface[] | null> {
    return this.getMoviesRepository.getPopularMovies(page)
  }
}
