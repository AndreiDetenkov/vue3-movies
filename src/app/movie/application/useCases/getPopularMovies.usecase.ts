import type { MovieInterface } from '@/app/movie/domain/movie.interface'

export abstract class GetPopularMoviesUsecase {
  abstract execute(page: number): Promise<MovieInterface[] | null>
}
