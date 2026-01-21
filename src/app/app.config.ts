import {
  ApplicationConfig,
  ErrorHandler,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GlobalErrorHandler } from './core/services/global-error-handler.service';
import { API_BASE_URL } from './core/http/tokens';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: API_BASE_URL,
      useValue: 'http://localhost:3000/api',
    },
    provideHttpClient(
      // Interceptor order matters:
      // 1. auth – enrich request
      // 2. loading – global UX state
      // 3. error – observe final response
      withInterceptors([authInterceptor, loadingInterceptor, errorInterceptor]),
    ),
  ],
};
