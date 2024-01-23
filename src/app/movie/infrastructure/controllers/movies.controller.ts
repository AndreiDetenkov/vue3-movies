import type { GetPopularMoviesUseCase } from '@/app/movie/application/useCases/getPopularMovies.usecase'
import type { GetPopularMoviesQuery } from '@/app/movie/application/services/getPopularMovies.query'

export class MoviesController {
  private getPopularMovies!: GetPopularMoviesUseCase

  public async getPopularMoviesByPage(page: GetPopularMoviesQuery): Promise<unknown> {
    return await this.getPopularMovies.execute(page)
  }
}
