import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { firstValueFrom, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AuthService, ThemeService, HasFeatureDirective } from '@core';

import { IMenuItem } from './app-navigation.config';
import { AppNavigationService } from './app-navigation.service';
import { NavigationMainItemComponent } from '../navigation-main-item/navigation-main-item.component';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrl: './app-navigation.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    HasFeatureDirective,
    NavigationMainItemComponent,
  ],
})
export class AppNavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private auth = inject(AuthService);
  private router = inject(Router);
  private nav = inject(AppNavigationService);
  public theme = inject(ThemeService);

  public menuItems: IMenuItem[] = [];

  public constructor() {
    this.menuItems = this.nav.getMenu();
  }

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  public async logout(): Promise<void> {
    await firstValueFrom(this.auth.logout());
    this.router.navigate(['']);
  }
}
