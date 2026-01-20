import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loader.service';
import { SKIP_LOADING } from '../http/tokens';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(LoadingService);

  if (req.context.get(SKIP_LOADING)) {
    return next(req);
  }

  loader.show();

  return next(req).pipe(finalize(() => loader.hide()));
};
