/* eslint-disable @typescript-eslint/naming-convention */
import { Role } from './role.model';
import { Permission } from './permission.model';

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  GUEST: ['VIEW_DASHBOARD'],
  USER: ['VIEW_DASHBOARD', 'VIEW_PROFILE', 'EDIT_PROFILE'],
  SUPPORT: ['VIEW_DASHBOARD', 'VIEW_PROFILE', 'VIEW_USERS'],
  ADMIN: [
    'VIEW_DASHBOARD',
    'VIEW_PROFILE',
    'EDIT_PROFILE',
    'VIEW_USERS',
    'MANAGE_USERS',
    'ACCESS_ADMIN_PANEL',
  ],
};
