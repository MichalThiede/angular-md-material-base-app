import { Routes } from '@angular/router';
import { PublicLayoutComponent } from '../layouts/public-layout/public-layout.component';
import { PublicGuard } from '../core/guards/public.guard';
import { authRoutes } from '../features/auth/auth.routes';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    canActivate: [PublicGuard],
    children: [...authRoutes],
  },
];
