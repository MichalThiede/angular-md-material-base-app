import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-nav-secondary-item',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div
      class="nav-item-feature"
      [routerLinkActive]="'nav-item-feature-active'"
      [routerLink]="item()?.route"
    >
      {{ item()?.name }}
    </div>
  `,
  styleUrl: './side-nav-secondary-item.component.scss',
})
export class SideNavSecondaryItemComponent {
  public item = input<{ name: string; route: string }>();
}
