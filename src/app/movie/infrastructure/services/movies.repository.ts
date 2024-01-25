import { Movies } from '@/app/movie/domain/movies'
import { PaginationMovies } from '@/app/movie/domain/paginationMovies'
import { MoviesApiClient } from '@/app/movie/infrastructure/api/clients/movies.api-client'

export class MoviesRepository implements Movies {
  constructor(private apiClient: MoviesApiClient) {}

  async getPopularMoviesList(pagination: PaginationMovies): Promise<unknown> {
    return await this.apiClient.getPopularMovies(pagination.page)
  }
}
