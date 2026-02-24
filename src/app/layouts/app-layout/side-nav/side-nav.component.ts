import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SideNavLogoComponent } from '../side-nav-logo/side-nav-logo.component';
import { SideNavListComponent } from '../side-nav-list/side-nav-list.component';
import { SideNavOptionsComponent } from '../side-nav-options/side-nav-options.component';

@Component({
  selector: 'app-side-nav',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    SideNavLogoComponent,
    SideNavListComponent,
    SideNavOptionsComponent,
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent {}
