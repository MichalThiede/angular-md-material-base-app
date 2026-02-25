import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { SideNavSecondaryItemComponent } from '../side-nav-secondary-item/side-nav-secondary-item.component';

@Component({
  selector: 'app-side-nav-secondary',
  imports: [SideNavSecondaryItemComponent],
  templateUrl: './side-nav-secondary.component.html',
  styleUrl: './side-nav-secondary.component.scss',
})
export class SideNavSecondaryComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public featureSections = [
    {
      name: 'Feature name',
      items: [
        {
          name: 'Feature Child Route',
          route: '/app/users/smth2',
        },
        {
          name: 'Feature Child Route Very Long',
          route: '/app/users',
        },
        {
          name: 'Feature Child Route',
          route: '/app/users/smth',
        },
        {
          name: 'Feature Child Route',
          route: '/app/users/smth3',
        },
        {
          name: 'Feature Child Route Long',
          route: '/app/users/smth4',
        },
      ],
    },
  ];

  public visible = signal(true);

  private navigationEnd = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
    ),
  );

  public secondarySideNav = computed(() => {
    this.navigationEnd();

    let activeRoute = this.route;
    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }

    return activeRoute.snapshot.data['secondarySideNav'] ?? false;
  });

  public constructor() {
    effect(() => {
      const visible = this.secondarySideNav();

      this.visible.set(visible);
    });
  }
}
