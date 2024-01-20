import { autowired } from 'first-di'
import type { GetPopularMoviesByPageUseCase } from '@/app/movie/application/useCases/getPopularMoviesByPage.usecase'

export class MoviesController {
  @autowired()
  private getPopularMovies!: GetPopularMoviesByPageUseCase

  public async getPopularMoviesByPage(page: number): Promise<any> {
    return await this.getPopularMovies.execute(page)
  }
}
