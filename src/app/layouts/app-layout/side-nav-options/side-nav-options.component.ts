import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { firstValueFrom } from 'rxjs';

import { AuthService } from 'src/app/core/auth/services/auth.service';
import { HasFeatureDirective } from 'src/app/core/feature-flags/has-feature.directive';
import { ThemeService } from 'src/app/core/ui/theme/theme.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-side-nav-options',
  imports: [
    AsyncPipe,
    HasFeatureDirective,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './side-nav-options.component.html',
  styleUrl: './side-nav-options.component.scss',
})
export class SideNavOptionsComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  public theme = inject(ThemeService);

  public async logout(): Promise<void> {
    await firstValueFrom(this.auth.logout());
    this.router.navigate(['']);
  }
}
