export class GetPopularMoviesQuery {
  readonly #page: number

  constructor(page: number) {
    this.#page = page
  }

  get page(): number {
    return this.#page
  }
}
