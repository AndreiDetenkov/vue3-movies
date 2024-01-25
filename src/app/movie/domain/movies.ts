import type { PaginationMovies } from '@/app/movie/domain/paginationMovies'

export abstract class Movies {
  abstract getPopularMoviesList(pagination: PaginationMovies): Promise<unknown>
}
