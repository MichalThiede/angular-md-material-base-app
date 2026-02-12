import { Injectable } from '@angular/core';
import { IAppConfig } from './config.model';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config!: IAppConfig;

  public async load(): Promise<void> {
    const res = await fetch('/config/app.config.json');
    if (!res.ok) {
      throw new Error('Failed to load app config');
    }
    const data = await res.json();
    this.config = data;
  }

  public get value(): IAppConfig {
    if (!this.config) {
      throw new Error('Config not loaded');
    }
    return this.config;
  }
}
