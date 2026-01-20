import { Routes } from '@angular/router';
import { authRoutes } from './routes/auth.routes';
import { publicRoutes } from './routes/public.routes';
import { errorRoutes } from './features/errors/errors.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  ...publicRoutes,
  ...authRoutes,
  ...errorRoutes,
  {
    path: '**',
    redirectTo: '404',
  },
];
