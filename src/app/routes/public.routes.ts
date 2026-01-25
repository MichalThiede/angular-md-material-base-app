import { Routes } from '@angular/router';
import { PublicLayoutComponent } from '@layouts';
import { PublicGuard } from '@core';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    canActivate: [PublicGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth',
      },
      {
        path: 'auth',
        loadChildren: () => import('@features').then((m) => m.authRoutes),
      },
    ],
  },
];
