import { autowired } from 'first-di'

import type { GetPopularMoviesUseCase } from '@/app/movie/application/useCases/getPopularMovies.usecase'

export class MoviesController {
  @autowired()
  private getPopularMovies!: GetPopularMoviesUseCase

  public async getPopularMoviesByPage(page: number): Promise<any> {
    return await this.getPopularMovies.execute(page)
  }
}
