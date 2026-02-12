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
  AuthService,
} from '@core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { catchError, of } from 'rxjs';

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
    provideAppInitializer(async () => {
      const config = inject(ConfigService);
      const theme = inject(ThemeService);
      const auth = inject(AuthService);

      await config.load().then(async () => {
        const isEnabled = config.value.ui.isEnabled;
        if (isEnabled) {
          theme.init();
        }

        await firstValueFrom(auth.refresh().pipe(catchError(() => of(false))));
        return Promise.resolve();
      });
    }),
  ],
};
