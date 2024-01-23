import type { GetPopularMoviesQuery } from '@/app/movie/application/services/getPopularMovies.query'

export abstract class GetPopularMoviesUseCase {
  abstract execute(page: GetPopularMoviesQuery): Promise<unknown>
}
