import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, startWith } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { Component, computed, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    @if (visible()) {
      <div class="animate-header text-3xl pb-9">{{ pageTitle() }}</div>
    }
  `,
  styles: `
    @layer utilities {
      .animate-header {
        @apply animate-[fadeIn_300ms_ease-out];
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  `,
})
export class PageHeaderComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public visible = signal(true);

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

  public constructor() {
    effect(() => {
      this.pageTitle();

      this.visible.set(false);
      queueMicrotask(() => this.visible.set(true));
    });
  }
}
