import { Injectable } from '@angular/core';
import { IAppConfig } from './config.model';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config!: IAppConfig;

  public load(): Promise<void> {
    return fetch('/config/app.config.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load app config');
        }
        return res.json();
      })
      .then((data: IAppConfig) => {
        this.config = data;
      });
  }

  public get value(): IAppConfig {
    if (!this.config) {
      throw new Error('Config not loaded');
    }
    return this.config;
  }
}
