import { Component } from '@angular/core';
import { HasPermissionDirective } from '../../core/auth/has-permission.directive';

@Component({
  selector: 'app-dashboard',
  imports: [HasPermissionDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
