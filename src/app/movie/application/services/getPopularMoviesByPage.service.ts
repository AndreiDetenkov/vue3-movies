import { autowired, reflection } from 'first-di'
import type { GetPopularMoviesByPageUseCase } from '@/app/movie/application/useCases/getPopularMoviesByPage.usecase'
import type { Movie } from '@/app/movie/domain/movie'
import type { MovieInterface } from '@/app/movie/domain/movie.interface'

@reflection
export class GetPopularMoviesByPageService implements GetPopularMoviesByPageUseCase {
  @autowired()
  private movie!: Movie

  execute(page: number = 1): Promise<MovieInterface[] | null> {
    return this.movie.get(page)
  }
}
