import { Routes } from '@angular/router';
import { AppLayoutComponent } from '@layouts';
import { AuthGuard, PermissionGuard } from '@core';

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
        canActivate: [PermissionGuard],
        data: { permissions: ['VIEW_DASHBOARD'], pageTitle: 'Dashboard' },
        loadChildren: () => import('@features').then((m) => m.dashboardRoutes),
      },
      {
        path: 'profile',
        canActivate: [PermissionGuard],
        data: { permissions: ['VIEW_PROFILE'], pageTitle: 'Profile' },
        loadChildren: () => import('@features').then((m) => m.profileRoutes),
      },
      {
        path: 'users',
        canActivate: [PermissionGuard],
        data: {
          permissions: ['MANAGE_USERS'],
          pageTitle: 'Users',
          secondarySideNav: true,
        },
        loadChildren: () => import('@features').then((m) => m.usersRoutes),
      },
      {
        path: 'reports',
        canActivate: [PermissionGuard],
        data: { permissions: ['VIEW_REPORTS'], pageTitle: 'Reports' },
        loadChildren: () => import('@features').then((m) => m.reportsRoutes),
      },
      {
        path: 'admin',
        canActivate: [PermissionGuard],
        data: { permissions: ['ACCESS_ADMIN_PANEL'], pageTitle: 'Admin' },
        loadChildren: () => import('@features').then((m) => m.adminRoutes),
      },
    ],
  },
];
