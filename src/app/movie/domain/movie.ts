import type { MovieInterface } from '@/app/movie/domain/movie.interface'

export abstract class Movie {
  abstract get(page: number): Promise<MovieInterface[] | null>
}
