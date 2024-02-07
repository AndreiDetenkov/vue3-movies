import type { PopularMoviesQuery } from '@/app/movie/application/popular/popular-movies.query'
import type { Movie } from '@/app/movie/domain/movie'

export interface PopularMoviesUseCase {
  execute(page: PopularMoviesQuery): Promise<Movie[]>
}
