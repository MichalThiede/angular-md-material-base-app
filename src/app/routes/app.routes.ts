import { Routes } from '@angular/router';
import { AppLayoutComponent } from '../layouts/app-layout/app-layout.component';
import { AuthGuard } from '../core/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [],
  },
];
