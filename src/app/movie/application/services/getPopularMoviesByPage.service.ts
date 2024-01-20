import { autowired, reflection } from 'first-di'
import type { GetPopularMoviesByPageUseCase } from '@/app/movie/application/useCases/getPopularMoviesByPage.usecase'
import type { GetMoviesService } from '@/app/movie/infrastructure/services/get-movies.service'

@reflection
export class GetPopularMoviesByPageService implements GetPopularMoviesByPageUseCase {
  @autowired()
  private getMoviesService!: GetMoviesService
  execute(page: number = 1): Promise<any> {
    return this.getMoviesService.execute(page)
  }
}
