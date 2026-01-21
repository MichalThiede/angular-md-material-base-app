import { inject, Injectable } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { IMenuItem, menuItems } from './app-navigation.config';

@Injectable({ providedIn: 'root' })
export class AppNavigationService {
  private auth = inject(AuthService);

  public getMenu(): IMenuItem[] {
    return menuItems.filter(
      (item) =>
        !item.permissions || this.auth.hasAnyPermission(item.permissions),
    );
  }
}
