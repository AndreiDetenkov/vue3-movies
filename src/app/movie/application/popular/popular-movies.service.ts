import type { PopularMoviesQuery } from '@/app/movie/application/popular/popular-movies.query'
import type { PopularMoviesUseCase } from '@/app/movie/application/popular/popular-movies.usecase'
import type { MoviesProvider } from '@/app/movie/domain/movies-provider'
import type { Movie } from '@/app/movie/domain/movie'

import { inject, injectable } from 'tsyringe'
import { TYPES } from '@/config/di/container.types'

injectable()
export class PopularMoviesService implements PopularMoviesUseCase {
  constructor(@inject(TYPES.MoviesProvider) private moviesProvider: MoviesProvider) {}

  async execute(query: PopularMoviesQuery): Promise<Movie[]> {
    console.log('GetPopularMoviesService')
    return await this.moviesProvider.getPopularMoviesList(query)
  }
}
