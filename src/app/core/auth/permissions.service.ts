import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ROLE_PERMISSIONS } from './roles.config';

@Injectable({ providedIn: 'root' })
export class PermissionsService {
  private auth = inject(AuthService);

  public getPermissions(): string[] {
    const user = this.auth.user;
    if (!user) return [];

    return ROLE_PERMISSIONS[user.role] ?? [];
  }

  public hasPermission(permission: string): boolean {
    return this.getPermissions().includes(permission);
  }

  public hasAnyPermission(permissions: string[]): boolean {
    const userPermissions = this.getPermissions();
    return permissions.some((p) => userPermissions.includes(p));
  }

  public hasAllPermissions(permissions: string[]): boolean {
    const userPermissions = this.getPermissions();
    return permissions.every((p) => userPermissions.includes(p));
  }
}
