import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnDestroy,
  inject,
} from '@angular/core';

import { Subscription } from 'rxjs';
import { Permission } from './permission.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appHasPermission]',
  standalone: true,
})
export class HasPermissionDirective implements OnDestroy {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private authService = inject(AuthService);

  private permissions: Permission[] = [];
  private sub?: Subscription;

  @Input()
  public set appHasPermission(value: Permission | Permission[]) {
    this.permissions = Array.isArray(value) ? value : [value];
    this.updateView();
  }

  public constructor() {
    this.sub = this.authService.state$.subscribe(() => this.updateView());
  }

  private updateView(): void {
    this.viewContainer.clear();

    if (this.authService.hasAnyPermission(this.permissions)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  public ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
