import { autowired } from 'first-di'

import type { GetPopularMoviesUsecase } from '@/app/movie/application/useCases/getPopularMovies.usecase'

export class MoviesController {
  @autowired()
  private getPopularMovies!: GetPopularMoviesUsecase

  public async getPopularMoviesByPage(page: number): Promise<any> {
    return await this.getPopularMovies.execute(page)
  }
}
