import { inject, injectable } from 'tsyringe'
import { TYPES } from '@/config/di/container.types'
import type { MoviesRepositoryInterface } from '@/app/movie/infrastructure/services/movies.repository'
import type { MovieInterface } from '@/app/movie/infrastructure/services/movie.interface'

@injectable()
export class MoviesService {
  constructor(
    @inject(TYPES.MoviesRepository) private moviesRepository: MoviesRepositoryInterface
  ) {}

  async getPopularMovies(page: number): Promise<MovieInterface[]> {
    return this.moviesRepository.getPopularMoviesList(page)
  }

  // async getTopRatedMovies(page: number): Promise<MovieInterface[]> {
  //   return this.moviesRepository.getPopularMoviesList(page)
  // }
}
