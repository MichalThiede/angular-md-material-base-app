import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './public-layout.component.scss',
})
export class PublicLayoutComponent {}
