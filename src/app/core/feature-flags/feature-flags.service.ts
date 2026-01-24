import { Injectable, inject } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { IFeatureFlags } from './feature-flags.model';

@Injectable({ providedIn: 'root' })
export class FeatureFlagsService {
  private config = inject(ConfigService);

  private flags: IFeatureFlags = {};

  private constructor() {
    this.loadFromConfig();
  }

  private loadFromConfig(): void {
    const cfg = this.config.value;
    if (cfg.features) {
      this.flags = cfg.features;
    }
  }

  public isEnabled(flag: string): boolean {
    return !!this.flags[flag];
  }

  public setFlag(flag: string, value: boolean): void {
    this.flags[flag] = value;
  }
}
