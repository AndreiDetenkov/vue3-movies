import type { Movies } from '@/app/movie/domain/movies'
import { PaginationMovies } from '@/app/movie/domain/PaginationMovies'

import type { GetPopularMoviesUseCase } from '@/app/movie/application/useCases/getPopularMovies.usecase'
import type { GetPopularMoviesQuery } from '@/app/movie/application/services/getPopularMovies.query'

export class GetPopularMoviesService implements GetPopularMoviesUseCase {
  private movies!: Movies

  execute(query: GetPopularMoviesQuery): Promise<unknown> {
    const pagination = new PaginationMovies(query.page)
    return this.movies.getPopularMoviesList(pagination)
  }
}
