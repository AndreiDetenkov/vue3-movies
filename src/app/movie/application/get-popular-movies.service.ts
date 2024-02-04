import { PaginationMovies } from '@/app/movie/domain/pagination-movies'
import { GetPopularMoviesQuery } from '@/app/movie/application/get-popular-movies.query'
import type { GetPopularMoviesUseCase } from '@/app/movie/application/get-popular-movies.usecase'
import type { MoviesProvider } from '@/app/movie/domain/movies-provider'

import { inject, injectable } from 'tsyringe'
import { TYPES } from '@/config/di/container.types'

injectable()
export class GetPopularMoviesService implements GetPopularMoviesUseCase {
  constructor(@inject(TYPES.MoviesProvider) private moviesProvider: MoviesProvider) {}

  async execute(query: GetPopularMoviesQuery): Promise<unknown> {
    const pagination = new PaginationMovies(query.page)
    return await this.moviesProvider.getPopularMoviesList(pagination)
  }
}
