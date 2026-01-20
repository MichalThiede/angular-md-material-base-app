import { ErrorHandler, inject, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from './logger.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private injector = inject(Injector);

  public handleError(error: unknown): void {
    const logger = this.injector.get(LoggerService);

    if (error instanceof HttpErrorResponse) {
      logger.error('HTTP error occurred', {
        status: error.status,
        message: error.message,
        url: error.url,
      });
    } else if (error instanceof Error) {
      logger.error('Unhandled application error', {
        message: error.message,
        stack: error.stack,
      });
    } else {
      logger.error('Unknown error type', error);
    }

    throw error;
  }
}
