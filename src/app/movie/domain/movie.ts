import { reflection } from 'first-di'
import type { MovieInterface } from '@/app/movie/domain/movie.interface'

@reflection
export abstract class Movie {
  abstract execute(page: number): Promise<MovieInterface[] | null>
}
