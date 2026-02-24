import { Component, inject } from '@angular/core';
import { SideNavItemComponent } from '../side-nav-item/side-nav-item.component';
import { ISideNavItem } from '../side-nav/side-nav.config';
import { SideNavService } from '../side-nav/side-nav.service';

@Component({
  selector: 'app-side-nav-list',
  imports: [SideNavItemComponent],
  templateUrl: './side-nav-list.component.html',
  styleUrl: './side-nav-list.component.scss',
})
export class SideNavListComponent {
  private sideNav = inject(SideNavService);

  public navItems: ISideNavItem[] = [];

  public constructor() {
    this.navItems = this.sideNav.getNavItems();
  }
}
