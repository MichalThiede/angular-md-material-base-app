import { InjectionToken } from '@angular/core';
import { IFeatureFlags } from './feature-flags.model';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FEATURE_FLAGS = new InjectionToken<IFeatureFlags>(
  'Feature Flags',
  {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    factory: () => ({}),
  },
);
