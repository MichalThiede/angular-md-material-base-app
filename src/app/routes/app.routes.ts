import { Routes } from '@angular/router';
import { AppLayoutComponent } from '../layouts/app-layout/app-layout.component';
import { AuthGuard } from '../core/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../features/dashboard/dashboard.routes').then(
            (m) => m.dashboardRoutes,
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../features/profile/profile.routes').then(
            (m) => m.profileRoutes,
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../features/users/users.routes').then((m) => m.usersRoutes),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../features/reports/reports.routes').then(
            (m) => m.reportsRoutes,
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../features/admin/admin.routes').then((m) => m.adminRoutes),
      },
    ],
  },
];
