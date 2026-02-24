import { inject, Injectable } from '@angular/core';
import { PermissionsService } from '@core';
import { ISideNavItem, sideNavItems } from './side-nav.config';

@Injectable({ providedIn: 'root' })
export class SideNavService {
  private permissions = inject(PermissionsService);

  public getMenu(): ISideNavItem[] {
    return sideNavItems.filter(
      (item) =>
        !item.permissions ||
        this.permissions.hasAnyPermission(item.permissions),
    );
  }
}
