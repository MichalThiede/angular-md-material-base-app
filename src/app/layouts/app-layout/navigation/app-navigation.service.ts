import { inject, Injectable } from '@angular/core';
import { PermissionsService } from '@core';
import { IMenuItem, menuItems } from './app-navigation.config';

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
