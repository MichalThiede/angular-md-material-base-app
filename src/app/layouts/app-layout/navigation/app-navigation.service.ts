import { inject, Injectable } from '@angular/core';
import { IMenuItem, menuItems } from './app-navigation.config';
import { PermissionsService } from '../../../core/auth/permissions.service';

@Injectable({ providedIn: 'root' })
export class AppNavigationService {
  private permissions = inject(PermissionsService);

  public getMenu(): IMenuItem[] {
    return menuItems.filter(
      (item) =>
        !item.permissions ||
        this.permissions.hasAnyPermission(item.permissions),
    );
  }
}
