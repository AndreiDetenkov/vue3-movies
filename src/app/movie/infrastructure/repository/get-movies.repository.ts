import { reflection } from 'first-di'
import type { MovieInterface } from '@/app/movie/domain/movie.interface'

async function http<T>(path: string, config: RequestInit): Promise<T> {
  const request = new Request(path, config)
  const response = await fetch(request)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json().catch(() => ({}))
}

export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: 'GET', ...config }
  return await http<T>(path, init)
}

@reflection
export class GetMoviesRepository {
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
