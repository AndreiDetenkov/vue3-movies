import { autowired, reflection } from 'first-di'

import type { Movie } from '@/app/movie/domain/movie'
import type { MovieInterface } from '@/app/movie/domain/movie.interface'

import type { GetPopularMoviesUseCase } from '@/app/movie/application/useCases/getPopularMovies.usecase'

@reflection
export class GetPopularMoviesService implements GetPopularMoviesUseCase {
  @autowired()
  private movie!: Movie

  execute(page: number = 1): Promise<MovieInterface[] | null> {
    return this.movie.get(page)
  }
}
