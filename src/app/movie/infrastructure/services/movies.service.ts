import { Movies } from '@/app/movie/domain/movies'
import { MoviesRepository } from '@/app/movie/infrastructure/repository/movies.repository'
import type { PaginationMovies } from '@/app/movie/domain/PaginationMovies'

export class MoviesService implements Movies {
  private getMoviesRepository!: MoviesRepository

  async getPopularMoviesList(pagination: PaginationMovies): Promise<unknown> {
    return await this.getMoviesRepository.getPopularMovies(pagination.page)
  }
}
