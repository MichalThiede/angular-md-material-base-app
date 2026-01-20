import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private readonly counter = signal(0);

  public readonly isLoading = computed(() => this.counter() > 0);

  public show(): void {
    this.counter.update((v) => v + 1);
  }

  public hide(): void {
    this.counter.update((v) => Math.max(0, v - 1));
  }

  // If you want to skip loader for request:
  //
  // this.http.get('/search', {
  //    context: new HttpContext().set(SKIP_LOADING, true),
  // });
}
