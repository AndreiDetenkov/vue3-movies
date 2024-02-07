import { inject, injectable } from 'tsyringe'
import { TYPES } from '@/config/di/container.types'

import type { PopularMoviesUseCase } from '@/app/movie/application/popular/popular-movies.usecase'
import type { Movie } from '@/app/movie/domain/movie'

@injectable()
export class MoviesController {
  constructor(
    @inject(TYPES.PopularMoviesUseCase) private popularMoviesUseCase: PopularMoviesUseCase
  ) {}

  async getPopularMovies(page: number): Promise<Movie[]> {
    return await this.popularMoviesUseCase.execute({ page })
  }
}
