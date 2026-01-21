import { inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
  private auth = inject(AuthService);
  private router = inject(Router);

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredPermissions = route.data['permissions'] as string[];

    if (!requiredPermissions?.length) {
      return true; // no permissions - allow access
    }

    const hasAccess = this.auth.hasAnyPermission(requiredPermissions);

    if (!hasAccess) {
      this.router.navigate(['/403']); // Forbidden page
    }

    return hasAccess;
  }
}
