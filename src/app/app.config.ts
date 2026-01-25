import {
  ApplicationConfig,
  ErrorHandler,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';

import {
  ErrorHandlerService,
  API_BASE_URL,
  errorInterceptor,
  authInterceptor,
  loadingInterceptor,
  ThemeService,
  ConfigService,
} from '@core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService,
    },
    {
      provide: API_BASE_URL,
      useFactory: (): string => {
        const config = inject(ConfigService);
        return config.value.api.baseUrl;
      },
    },
    provideHttpClient(
      withInterceptors([authInterceptor, loadingInterceptor, errorInterceptor]),
    ),
    provideAppInitializer(() => {
      const config = inject(ConfigService);
      const theme = inject(ThemeService);

      return config.load().then(() => {
        const isEnabled = config.value.ui.isEnabled;
        return isEnabled ? theme.init() : Promise.resolve();
      });
    }),
  ],
};
