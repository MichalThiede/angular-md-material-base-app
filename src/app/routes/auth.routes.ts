import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { AuthGuard } from '../core/guards/auth.guard';

export const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [AuthGuard],
    children: [],
  },
];
