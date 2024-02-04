import type { MovieInterface } from '@/app/movie/infrastructure/services/movie.interface'

export interface ResponseSuccessInterface {
  page: number
  results: MovieInterface[]
  total_pages: number
  total_results: number
}

interface ResponseErrorInterface {
  status_code: number
  status_message: string
  success: number
}

type ResponseInterface = ResponseSuccessInterface | ResponseErrorInterface

export class MoviesApiClient {
  private readonly baseUrl = import.meta.env.VITE_BASE_URL
  private readonly apiKey = import.meta.env.VITE_API_KEY

  createUrl(tag: string, page: number): string {
    return `${this.baseUrl}/movie/${tag}?api_key=${this.apiKey}&page=${page}`
  }

  async getPopularMovies(page: number): Promise<ResponseInterface> {
    const url = this.createUrl('popular', page)
    return (await fetch(url)).json()
  }

  async getTopRatedMovies(page: number): Promise<ResponseInterface> {
    const url = this.createUrl('top_rated', page)
    return (await fetch(url)).json()
  }
}
