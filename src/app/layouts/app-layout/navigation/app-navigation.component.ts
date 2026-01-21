import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { AppNavigationService } from './app-navigation.service';
import { IMenuItem } from './app-navigation.config';

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
  ],
})
export class AppNavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private auth = inject(AuthService);
  private router = inject(Router);
  private nav = inject(AppNavigationService);
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

  public logout(): void {
    this.auth.logout();
    this.router.navigate(['']);
  }
}
