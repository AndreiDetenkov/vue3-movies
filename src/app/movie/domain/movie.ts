export class Movie {
  readonly #id: number
  readonly #title: string
  readonly #releaseDate: string
  readonly #voteAverage: number
  readonly #posterPath: string

  constructor(
    id: number,
    title: string,
    releaseDate: string,
    voteAverage: number,
    posterPath: string
  ) {
    this.#id = id
    this.#title = title
    this.#releaseDate = releaseDate
    this.#voteAverage = voteAverage
    this.#posterPath = posterPath
  }

  get id(): number {
    return this.#id
  }

  get title(): string {
    return this.#title
  }

  get releaseDate(): string {
    return this.#releaseDate
  }

  get voteAverage(): number {
    return this.#voteAverage
  }

  get posterPath(): string {
    return this.#posterPath
  }
}
