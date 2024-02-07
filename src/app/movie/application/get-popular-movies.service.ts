import type { GetPopularMoviesQuery } from '@/app/movie/application/get-popular-movies.query'
import type { GetPopularMoviesUseCase } from '@/app/movie/application/get-popular-movies.usecase'
import type { MoviesProvider } from '@/app/movie/domain/movies-provider'
import type { Movie } from '@/app/movie/domain/movie'

import { inject, injectable } from 'tsyringe'
import { TYPES } from '@/config/di/container.types'

injectable()
export class GetPopularMoviesService implements GetPopularMoviesUseCase {
  constructor(@inject(TYPES.MoviesProvider) private moviesProvider: MoviesProvider) {}

  async execute(query: GetPopularMoviesQuery): Promise<Movie[]> {
    return await this.moviesProvider.getPopularMoviesList(query)
  }
}
