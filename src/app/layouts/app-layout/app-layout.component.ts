import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SideNavSecondaryComponent } from './side-nav-secondary/side-nav-secondary.component';

@Component({
  selector: 'app-app-layout',
  imports: [
    RouterOutlet,
    PageHeaderComponent,
    SideNavComponent,
    SideNavSecondaryComponent,
  ],
  template: `
    <app-side-nav>
      <div class="flex h-full">
        <app-side-nav-secondary></app-side-nav-secondary>
        <div class="flex flex-col p-9">
          <app-page-header></app-page-header>
          <router-outlet></router-outlet>
        </div>
      </div>
    </app-side-nav>
  `,
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {}
