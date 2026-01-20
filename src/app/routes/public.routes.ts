import { Routes } from '@angular/router';
import { PublicLayoutComponent } from '../layouts/public-layout/public-layout.component';
import { LoginComponent } from '../features/auth/login/login.component';
import { PublicGuard } from '../core/guards/public.guard';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    canActivate: [PublicGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
