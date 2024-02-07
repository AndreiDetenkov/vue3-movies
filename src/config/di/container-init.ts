import { container } from 'tsyringe'
import { TYPES } from '@/config/di/container.types'

import {
  type LoggerInterface,
  LoggerService
} from '@/app/movie/infrastructure/services/logger.service'
import type { PopularMoviesUseCase } from '@/app/movie/application/popular/popular-movies.usecase'
import { PopularMoviesService } from '@/app/movie/application/popular/popular-movies.service'
import { MoviesService } from '@/app/movie/infrastructure/services/movies.service'
import type { MoviesProvider } from '@/app/movie/domain/movies-provider'
import { MoviesApiClient } from '@/app/movie/infrastructure/api/clients/movies-api-client'

export function initDIContainer() {
  container.register<LoggerInterface>(TYPES.Logger, {
    useClass: LoggerService
  })

  container.register<PopularMoviesUseCase>(TYPES.PopularMoviesUseCase, {
    useClass: PopularMoviesService
  })

  container.register<MoviesProvider>(TYPES.MoviesProvider, { useClass: MoviesService })

  container.register(TYPES.MoviesApiClient, { useValue: new MoviesApiClient() })
}
