import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './routes/auth.routes';
import { PUBLIC_ROUTES } from './routes/public.routes';
import { ERRORS_ROUTES } from './features/errors/errors.routes';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  ...PUBLIC_ROUTES,
  ...AUTH_ROUTES,
  ...ERRORS_ROUTES,
  {
    path: '**',
    redirectTo: '404',
  },
];
