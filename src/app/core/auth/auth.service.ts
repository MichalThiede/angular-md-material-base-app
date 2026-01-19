import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser, IAuthState } from './auth.model';
import { MOCK_USERS } from './auth.mock';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authState$ = new BehaviorSubject<IAuthState>({
    isAuthenticated: false,
    user: null,
  });

  public readonly state$: Observable<IAuthState> =
    this.authState$.asObservable();

  public get isAuthenticated(): boolean {
    return this.authState$.value.isAuthenticated;
  }

  public get user(): IUser | null {
    return this.authState$.value.user;
  }

  public login(email: string, password: string): boolean {
    const USER = MOCK_USERS.find(
      (user: IUser & { password: string }) =>
        user.email === email && user.password === password,
    );

    if (!USER) {
      return false;
    }

    this.authState$.next({
      isAuthenticated: true,
      user: USER,
    });

    return true;
  }

  public logout(): void {
    this.authState$.next({
      isAuthenticated: false,
      user: null,
    });
  }
}
