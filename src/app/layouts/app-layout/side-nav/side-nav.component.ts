import { AsyncPipe } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService, HasFeatureDirective, ThemeService } from '@core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

import { SideNavItemComponent } from '../side-nav-item/side-nav-item.component';
import { SideNavService } from './side-nav.service';
import { ISideNavItem } from './side-nav.config';

@Component({
  selector: 'app-side-nav',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    HasFeatureDirective,
    SideNavItemComponent,
    MatMenuModule,
    SideNavItemComponent,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  private sideNav = inject(SideNavService);
  public theme = inject(ThemeService);

  public navItems: ISideNavItem[] = [];

  public constructor() {
    this.navItems = this.sideNav.getMenu();
  }

  public async logout(): Promise<void> {
    await firstValueFrom(this.auth.logout());
    this.router.navigate(['']);
  }
}
