import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { filter, startWith } from 'rxjs';

@Component({
  selector: 'app-side-nav-secondary',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-nav-secondary.component.html',
  styleUrl: './side-nav-secondary.component.scss',
})
export class SideNavSecondaryComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

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
