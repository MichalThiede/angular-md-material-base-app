import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation-main-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation-main-item.component.html',
  styleUrl: './navigation-main-item.component.scss',
})
export class NavigationMainItemComponent {
  public navItemName = input<string>();
  public navItemRoute = input<string>();
}
