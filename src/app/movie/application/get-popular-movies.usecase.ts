import type { GetPopularMoviesQuery } from '@/app/movie/application/get-popular-movies.query'

export interface GetPopularMoviesUseCase {
  execute(page: GetPopularMoviesQuery): Promise<unknown>
}
