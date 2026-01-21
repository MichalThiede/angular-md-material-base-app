import { Routes } from '@angular/router';
import { AppLayoutComponent } from '../layouts/app-layout/app-layout.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { PermissionGuard } from '../core/guards/permission.guard';

export const appRoutes: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // Domyślne przekierowanie do dashboard
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },

      // Dashboard
      {
        path: 'dashboard',
        canActivate: [PermissionGuard],
        data: { permissions: ['VIEW_DASHBOARD'] },
        loadChildren: () =>
          import('../features/dashboard/dashboard.routes').then(
            (m) => m.dashboardRoutes,
          ),
      },

      // Profile
      {
        path: 'profile',
        canActivate: [PermissionGuard],
        data: { permissions: ['VIEW_PROFILE'] },
        loadChildren: () =>
          import('../features/profile/profile.routes').then(
            (m) => m.profileRoutes,
          ),
      },

      // Users
      {
        path: 'users',
        canActivate: [PermissionGuard],
        data: { permissions: ['MANAGE_USERS'] },
        loadChildren: () =>
          import('../features/users/users.routes').then((m) => m.usersRoutes),
      },

      // Reports
      {
        path: 'reports',
        canActivate: [PermissionGuard],
        data: { permissions: ['VIEW_REPORTS'] },
        loadChildren: () =>
          import('../features/reports/reports.routes').then(
            (m) => m.reportsRoutes,
          ),
      },

      // Admin
      {
        path: 'admin',
        canActivate: [PermissionGuard],
        data: { permissions: ['ACCESS_ADMIN_PANEL'] },
        loadChildren: () =>
          import('../features/admin/admin.routes').then((m) => m.adminRoutes),
      },
    ],
  },
];
