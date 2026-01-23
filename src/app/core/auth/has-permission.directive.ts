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
import { PermissionsService } from './permissions.service';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appHasPermission]',
  standalone: true,
})
export class HasPermissionDirective implements OnDestroy {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private permissionsService = inject(PermissionsService);
  private auth = inject(AuthService);

  private permissions: Permission[] = [];
  private sub?: Subscription;

  @Input()
  public set appHasPermission(value: Permission | Permission[]) {
    this.permissions = Array.isArray(value) ? value : [value];
    this.updateView();
  }

  public constructor() {
    this.sub = this.auth.state$.subscribe(() => this.updateView());
  }

  private updateView(): void {
    this.viewContainer.clear();

    if (this.permissionsService.hasAnyPermission(this.permissions)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  public ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
