import { container } from '@/config/di/container'

import { GetPopularMoviesUseCase } from '@/app/movie/application/useCases/getPopularMovies.usecase'
import { GetPopularMoviesService } from '@/app/movie/application/services/getPopularMovies.service'
import { Movies } from '@/app/movie/domain/movies'
import { MoviesRepository } from '@/app/movie/infrastructure/services/movies.repository'
import { MoviesApiClient } from '@/app/movie/infrastructure/api/clients/movies.api-client'

container.registerSingleton<GetPopularMoviesUseCase, GetPopularMoviesService>()
container.registerSingleton<Movies, MoviesRepository>()
container.registerSingleton<MoviesApiClient>()
