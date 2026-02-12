import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  if (req.url.includes('/auth/refresh')) {
    return next(req);
  }

  const token = auth.getAccessToken();

  const authReq = req.clone({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    setHeaders: token ? { Authorization: `Bearer ${token}` } : {},
    withCredentials: true,
  });

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        return auth.refresh().pipe(
          switchMap((success) => {
            if (!success) {
              return throwError(() => error);
            }

            const newToken = auth.getAccessToken();

            const retryReq = req.clone({
              setHeaders: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Authorization: `Bearer ${newToken}`,
              },
              withCredentials: true,
            });

            return next(retryReq);
          }),
        );
      }

      return throwError(() => error);
    }),
  );
};
