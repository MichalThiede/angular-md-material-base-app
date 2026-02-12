import { inject, Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ROLE_PERMISSIONS } from './roles.config';
import { Permission } from './permission.model';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
  private auth = inject(AuthService);

  public getPermissions(): Permission[] {
    const userRole = this.auth.getRole();
    if (userRole === null) return [];

    return ROLE_PERMISSIONS[userRole] ?? [];
  }

  public hasPermission(permission: Permission): boolean {
    return this.getPermissions().includes(permission);
  }

  public hasAnyPermission(permissions: Permission[]): boolean {
    const userPermissions = this.getPermissions();
    return permissions.some((p) => userPermissions.includes(p));
  }

  public hasAllPermissions(permissions: Permission[]): boolean {
    const userPermissions = this.getPermissions();
    return permissions.every((p) => userPermissions.includes(p));
  }
}
