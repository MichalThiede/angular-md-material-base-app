import { inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PermissionsService } from '../auth/permissions.service';
import { Permission } from '../auth/permission.model';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  private permissions = inject(PermissionsService);
  private router = inject(Router);

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredPermissions = route.data['permissions'] as Permission[];

    if (!requiredPermissions?.length) {
      return true;
    }

    const hasAccess = this.permissions.hasAnyPermission(requiredPermissions);

    if (!hasAccess) {
      this.router.navigate(['/403']);
    }

    return hasAccess;
  }
}
