import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageTitleHeaderComponent } from './page-title-header/page-title-header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet, PageTitleHeaderComponent, SideNavComponent],
  template: `
    <app-side-nav>
      <div class="flex flex-col p-9">
        <app-page-title-header></app-page-title-header>
        <router-outlet></router-outlet>
      </div>
    </app-side-nav>
  `,
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {}
