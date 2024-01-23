import type { MovieInterface } from '@/app/movie/infrastructure/repository/movie.interface'

import { get } from '@/app/movie/infrastructure/clients/http'

export class MoviesRepository {
  private readonly baseUrl = import.meta.env.VITE_BASE_URL
  private readonly apiKey = import.meta.env.VITE_API_KEY

  createUrl(tag: string, page: number): string {
    return `${this.baseUrl}/movie/${tag}?api_key=${this.apiKey}&page=${page}`
  }

  async getPopularMovies(page: number): Promise<MovieInterface[] | null> {
    try {
      const url = this.createUrl('popular', page)
      return await get(url)
    } catch (e) {
      return null
    }
  }
}
