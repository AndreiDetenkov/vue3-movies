import type { PaginationMovie } from '@/app/movie/domain/pagination-movie'
import type { Movie } from '@/app/movie/domain/movie'

export interface MoviesProvider {
  getPopularMoviesList(pagination: PaginationMovie): Promise<Movie[]>
}
