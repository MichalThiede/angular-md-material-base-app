import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation-main-item',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './navigation-main-item.component.html',
  styleUrl: './navigation-main-item.component.scss',
})
export class NavigationMainItemComponent {
  public label = input<string>();
  public route = input<string>();
  public icon = input<string>('');
}
