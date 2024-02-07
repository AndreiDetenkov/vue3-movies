import { inject, injectable } from 'tsyringe'
import { TYPES } from '@/config/di/container.types'

import type { GetPopularMoviesUseCase } from '@/app/movie/application/get-popular-movies.usecase'
import type { Movie } from '@/app/movie/domain/movie'

@injectable()
export class MoviesController {
  constructor(
    @inject(TYPES.GetPopularMoviesUseCase) private getPopularMoviesUseCase: GetPopularMoviesUseCase
  ) {}

  async getPopularMovies(page: number): Promise<Movie[]> {
    return await this.getPopularMoviesUseCase.execute({ page })
  }
}
