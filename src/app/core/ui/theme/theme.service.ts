import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeMode } from './theme.model';

const storageKey = 'ui-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly theme$ = new BehaviorSubject<ThemeMode>(
    this.getInitialTheme(),
  );

  public readonly mode$ = this.theme$.asObservable();

  private get mode(): ThemeMode {
    return this.theme$.value;
  }

  public init(): void {
    const mode = this.getInitialTheme();
    this.theme$.next(mode);
    this.applyTheme(mode);
  }

  public setTheme(mode: ThemeMode): void {
    this.theme$.next(mode);
    localStorage.setItem(storageKey, mode);
    this.applyTheme(mode);
  }

  public toggle(): void {
    this.setTheme(this.mode === 'dark' ? 'light' : 'dark');
  }

  private getInitialTheme(): ThemeMode {
    return (localStorage.getItem(storageKey) as ThemeMode) ?? 'system';
  }

  private applyTheme(mode: ThemeMode): void {
    const isDark =
      mode === 'dark' ||
      (mode === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.body.classList.toggle('dark-theme', isDark);
  }
}
