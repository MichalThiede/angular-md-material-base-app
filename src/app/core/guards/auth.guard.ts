import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private auth = inject(AuthService);
  private router = inject(Router);

  public canActivate(): boolean | UrlTree {
    if (this.auth.isAuthenticated) {
      return true;
    }

    return this.router.createUrlTree(['/auth/login']);
  }
}
