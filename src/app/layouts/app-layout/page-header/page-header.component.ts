import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `<div class="text-3xl pb-9">{{ pageTitle() }}</div>`,
})
export class PageHeaderComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private navigationEnd = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
    ),
  );

  public pageTitle = computed(() => {
    this.navigationEnd();

    let activeRoute = this.route;
    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }

    return activeRoute.snapshot.data['pageTitle'] ?? '';
  });
}
