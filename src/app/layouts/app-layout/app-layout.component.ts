import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavigationComponent } from './navigation/app-navigation.component';
import { AuthService } from '../../core/auth/auth.service';

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
export class AppLayoutComponent {
  private auth = inject(AuthService);

  public constructor() {
    const permissions = this.auth.getPermissions();
    console.log('User permissions:', permissions);
  }
}
