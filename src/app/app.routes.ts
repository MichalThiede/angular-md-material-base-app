import { Routes } from '@angular/router';
import { appRoutes } from './routes/app.routes';
import { publicRoutes } from './routes/public.routes';
import { errorRoutes } from './features/errors/errors.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
  },
  ...publicRoutes,
  ...appRoutes,
  ...errorRoutes,
  {
    path: '**',
    redirectTo: '404',
  },
];
