import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  imports: [],
  template: `
    <h1>403</h1>
    <p>Access denied</p>
  `,
  styleUrl: './forbidden.component.scss',
})
export class ForbiddenComponent {}
