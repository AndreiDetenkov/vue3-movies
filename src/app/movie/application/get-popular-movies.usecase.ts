import type { GetPopularMoviesQuery } from '@/app/movie/application/get-popular-movies.query'
import type { Movie } from '@/app/movie/domain/movie'

export interface GetPopularMoviesUseCase {
  execute(page: GetPopularMoviesQuery): Promise<Movie[]>
}
