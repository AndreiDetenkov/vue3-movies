import { container } from 'tsyringe'
import { TYPES } from '@/config/di/container.types'
import {
  MoviesRepository,
  type MoviesRepositoryInterface
} from '@/app/movie/infrastructure/services/movies.repository'
import {
  type LoggerInterface,
  LoggerService
} from '@/app/movie/infrastructure/services/logger.service'
import { MoviesApiClient } from '@/app/movie/infrastructure/api/clients/movies-api-client'

export function initDIContainer() {
  container.register<LoggerInterface>(TYPES.Logger, {
    useClass: LoggerService
  })

  container.register<MoviesRepositoryInterface>(TYPES.MoviesRepository, {
    useClass: MoviesRepository
  })

  container.register(TYPES.MoviesApiClient, { useValue: new MoviesApiClient() })
}
