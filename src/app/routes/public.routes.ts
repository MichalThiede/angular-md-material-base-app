import { Routes } from '@angular/router';
import { PublicLayoutComponent } from '../layouts/public-layout/public-layout.component';
import { LoginComponent } from '../features/auth/login/login.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
