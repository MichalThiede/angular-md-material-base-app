import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TokenStore {
  private accessToken: string | null = null;

  public set(token: string): void {
    this.accessToken = token;
  }

  public get(): string | null {
    return this.accessToken;
  }

  public clear(): void {
    this.accessToken = null;
  }

  public hasToken(): boolean {
    return !!this.accessToken;
  }
}
