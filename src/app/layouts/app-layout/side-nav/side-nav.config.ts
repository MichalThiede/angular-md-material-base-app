import { Permission } from '@core';

export interface ISideNavItem {
  label: string;
  icon: string;
  route: string;
  permissions?: Permission[];
  children?: ISideNavItem[];
}

export const sideNavItems: ISideNavItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/app/dashboard',
    permissions: ['VIEW_DASHBOARD'],
  },
  {
    label: 'Profile',
    icon: 'person_pin',
    route: '/app/profile',
    permissions: ['VIEW_PROFILE'],
  },
  {
    label: 'Users',
    icon: 'group',
    route: '/app/users',
    permissions: ['VIEW_USERS'],
  },
  {
    label: 'Reports',
    icon: 'view_list',
    route: '/app/reports',
    permissions: ['VIEW_REPORTS'],
  },
  {
    label: 'Admin',
    icon: 'admin_panel_settings',
    route: '/app/admin',
    permissions: ['ACCESS_ADMIN_PANEL'],
  },
];
