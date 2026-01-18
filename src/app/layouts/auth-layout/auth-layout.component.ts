import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthNavigationComponent } from './navigation/auth-navigation.component';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, AuthNavigationComponent],
  template: `
    <app-auth-navigation>
      <div>Auth routes</div>
      <router-outlet></router-outlet>
    </app-auth-navigation>
  `,
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {}
