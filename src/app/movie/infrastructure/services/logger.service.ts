export interface LoggerInterface {
  log(message: string): void
  error(message: string): void
  warn(message: string): void
}

export class LoggerService implements LoggerInterface {
  log(message: string) {
    console.log(message)
  }

  error(message: string) {
    console.error(message)
  }

  warn(message: string) {
    console.warn(message)
  }
}
