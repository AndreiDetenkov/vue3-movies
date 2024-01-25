import { container } from '@/app/di'
import { Movies } from '@/app/movie/domain/movies'
import { MoviesApiClient } from '@/app/movie/infrastructure/api/clients/movies.api-client'
import { PaginationMovies } from '@/app/movie/domain/paginationMovies'

export class MoviesRepository implements Movies {
  private apiClient = container.get<MoviesApiClient>()

  async getPopularMoviesList(pagination: PaginationMovies): Promise<unknown> {
    return await this.apiClient.getPopularMovies(pagination.page)
  }
}

container.registerSingleton<Movies, MoviesRepository>()
