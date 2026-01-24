import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
  OnDestroy,
} from '@angular/core';
import { FeatureFlagsService } from './feature-flags.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appHasFeature]',
  standalone: true,
})
export class HasFeatureDirective implements OnDestroy {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private featureFlags = inject(FeatureFlagsService);

  private featureName: string | null = null;
  private sub?: Subscription;

  @Input()
  public set appHasFeature(value: string) {
    this.featureName = value;
    this.updateView();
  }

  private updateView(): void {
    this.viewContainer.clear();
    if (this.featureName && this.featureFlags.isEnabled(this.featureName)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  public ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
