import type { MovieInterface } from '@/app/movie/domain/movie.interface'

export abstract class GetPopularMoviesUseCase {
  abstract execute(page: number): Promise<MovieInterface[] | null>
}
