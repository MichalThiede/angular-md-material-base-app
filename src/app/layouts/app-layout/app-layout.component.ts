import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavigationComponent } from './navigation/app-navigation.component';

@Component({
  selector: 'app-app-layout',
  imports: [RouterOutlet, AppNavigationComponent],
  template: `
    <app-app-navigation>
      <router-outlet></router-outlet>
    </app-app-navigation>
  `,
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {}
