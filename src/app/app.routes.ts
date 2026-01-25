import { Routes } from '@angular/router';
import { appRoutes } from './routes/app.routes';
import { publicRoutes } from './routes/public.routes';
import { errorRoutes } from '@features';

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
