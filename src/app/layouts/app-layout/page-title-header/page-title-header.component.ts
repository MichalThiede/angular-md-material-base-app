import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-page-title-header',
  template: `<div class="text-3xl pb-9">{{ pageTitle }}</div>`,
})
export class PageTitleHeaderComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public pageTitle = '';

  public ngOnInit(): void {
    this.updateTitle();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });
  }

  private updateTitle(): void {
    let activeRoute = this.route;

    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }

    this.pageTitle = activeRoute.snapshot.data['pageTitle'] ?? '';
  }
}
