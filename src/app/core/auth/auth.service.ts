import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser, IAuthState } from './auth.model';
import { mockUsers } from './auth.mock';
import { ROLE_PERMISSIONS } from './roles.config';

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
    const user = mockUsers.find(
      (user: IUser & { password: string }) =>
        user.email === email && user.password === password,
    );

    if (!user) {
      return false;
    }

    this.authState$.next({
      isAuthenticated: true,
      user: user,
    });

    return true;
  }

  public logout(): void {
    this.authState$.next({
      isAuthenticated: false,
      user: null,
    });
  }

  public getToken(): string {
    return `token`;
  }

  public getPermissions(): Array<string> {
    if (!this.user) {
      return [];
    } else {
      return ROLE_PERMISSIONS[this.user.role];
    }
  }

  public hasPermission(permission: string): boolean {
    const permissions = this.getPermissions();
    return permissions.includes(permission);
  }

  public hasAnyPermission(permissions: Array<string>): boolean {
    const userPermissions = this.getPermissions();
    return permissions.some((permission) =>
      userPermissions.includes(permission),
    );
  }
}
