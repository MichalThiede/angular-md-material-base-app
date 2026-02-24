import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-nav-item',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './side-nav-item.component.html',
  styleUrl: './side-nav-item.component.scss',
})
export class SideNavItemComponent {
  public label = input<string>();
  public route = input<string>();
  public icon = input<string>('');
}
