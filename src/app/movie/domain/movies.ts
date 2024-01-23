import type { PaginationMovies } from '@/app/movie/domain/PaginationMovies'

export abstract class Movies {
  abstract getPopularMoviesList(pagination: PaginationMovies): Promise<unknown>
}
