export abstract class GetPopularMoviesByPageUseCase {
  abstract execute(page: number): Promise<any>
}
