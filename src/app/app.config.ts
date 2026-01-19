import {
  ApplicationConfig,
  ErrorHandler,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { ROUTES } from './app.routes';
import { GlobalErrorHandler } from './core/services/global-error-handler.service';

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(ROUTES),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
};
