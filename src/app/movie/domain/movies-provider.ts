import type { PaginationMovies } from '@/app/movie/domain/pagination-movies'
import type { MovieInterface } from '@/app/movie/infrastructure/services/movie.interface'

export interface MoviesProvider {
  getPopularMoviesList(pagination: PaginationMovies): Promise<MovieInterface[] | undefined>
}
