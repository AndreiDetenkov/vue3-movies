import { inject, injectable } from 'tsyringe'
import { TYPES } from '@/config/di/container.types'

import { MoviesApiClient } from '@/app/movie/infrastructure/api/clients/movies-api-client'
// import type { LoggerInterface } from '@/app/movie/infrastructure/services/logger.service'
import type { MoviesProvider } from '@/app/movie/domain/movies-provider'
import type { PaginationMovie } from '@/app/movie/domain/pagination-movie'
import type { Movie } from '@/app/movie/domain/movie'

@injectable()
export class MoviesService implements MoviesProvider {
  constructor(
    private moviesApiClient: MoviesApiClient
    // @inject(TYPES.MoviesApiClient) private moviesApiClient: MoviesApiClient
    // @inject(TYPES.Logger) private logger: LoggerInterface
  ) {}

  async getPopularMoviesList(pagination: PaginationMovie): Promise<Movie[]> {
    const response = await this.moviesApiClient.getPopularMovies(pagination.page)
    console.log('getPopularMoviesList', response)
    return []
  }
}
