import { Permission } from '@core';

export interface IMenuItem {
  label: string;
  icon?: string;
  route: string;
  permissions?: Permission[];
  children?: IMenuItem[];
}

export const menuItems: IMenuItem[] = [
  {
    label: 'Dashboard',
    route: '/app/dashboard',
    permissions: ['VIEW_DASHBOARD'],
  },
  {
    label: 'Profile',
    route: '/app/profile',
    permissions: ['VIEW_PROFILE'],
  },
  {
    label: 'Users',
    route: '/app/users',
    permissions: ['VIEW_USERS'],
  },
  {
    label: 'Reports',
    route: '/app/reports',
    permissions: ['VIEW_REPORTS'],
  },
  {
    label: 'Admin',
    route: '/app/admin',
    permissions: ['ACCESS_ADMIN_PANEL'],
  },
];
