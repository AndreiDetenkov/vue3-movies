import { inject, injectable } from 'tsyringe'
import { TYPES } from '@/config/di/container.types'
import { MoviesApiClient } from '@/app/movie/infrastructure/api/clients/movies-api-client'
import type { MovieInterface } from '@/app/movie/infrastructure/services/movie.interface'
import type { LoggerInterface } from '@/app/movie/infrastructure/services/logger.service'

export interface MoviesRepositoryInterface {
  getPopularMoviesList(page: number): Promise<MovieInterface[]>
  // getTopRatedMoviesList(page: number): Promise<MovieInterface[]>
}

@injectable()
export class MoviesRepository implements MoviesRepositoryInterface {
  constructor(
    @inject(TYPES.MoviesApiClient) private moviesApiClient: MoviesApiClient,
    @inject(TYPES.Logger) private logger: LoggerInterface
  ) {}

  async getPopularMoviesList(page: number): Promise<MovieInterface[]> {
    const response = await this.moviesApiClient.getPopularMovies(page)

    if ('results' in response) {
      return response.results
    }

    if ('success' in response && !response.success) {
      this.logger.error(response.status_message)
    }

    return []
  }

  // async getTopRatedMoviesList(page: number): Promise<MovieInterface[]> {
  //   const response = await this.moviesApiClient.getTopRatedMovies(page)
  //   console.log(response)
  //   return response.results
  // }
}
