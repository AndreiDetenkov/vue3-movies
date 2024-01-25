import { Movies } from '@/app/movie/domain/movies'
import { PaginationMovies } from '@/app/movie/domain/paginationMovies'
import { GetPopularMoviesUseCase } from '@/app/movie/application/useCases/getPopularMovies.usecase'
import { GetPopularMoviesQuery } from '@/app/movie/application/services/getPopularMovies.query'

export class GetPopularMoviesService implements GetPopularMoviesUseCase {
  constructor(private movies: Movies) {}

  execute(query: GetPopularMoviesQuery): Promise<unknown> {
    const pagination = new PaginationMovies(query.page)
    return this.movies.getPopularMoviesList(pagination)
  }
}
