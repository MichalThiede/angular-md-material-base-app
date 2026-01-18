import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  template: `
    <div>Public routes</div>
    <router-outlet></router-outlet>
  `,
  styleUrl: './public-layout.component.scss',
})
export class PublicLayoutComponent {}
