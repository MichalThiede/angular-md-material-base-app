import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavigationComponent } from './navigation/app-navigation.component';
import { PageTitleHeaderComponent } from './page-title-header/page-title-header.component';

@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet, AppNavigationComponent, PageTitleHeaderComponent],
  template: `
    <app-app-navigation>
      <div class="flex flex-col p-9">
        <app-page-title-header></app-page-title-header>
        <router-outlet></router-outlet>
      </div>
    </app-app-navigation>
  `,
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {}
