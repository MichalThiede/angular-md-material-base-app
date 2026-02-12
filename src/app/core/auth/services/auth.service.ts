import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap, map, catchError, of } from 'rxjs';
import { AuthApi } from './auth.api';
import { TokenStore } from '../tokens/tokens.store';
import { ILoginResponseDto } from '../dto/login.dto';
import { IRefreshResponseDto } from '../dto/refresh.dto';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { Role } from '../role.model';

interface IAuthState {
  isAuthenticated: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(AuthApi);
  private tokenStore = inject(TokenStore);

  private authState$ = new BehaviorSubject<IAuthState>({
    isAuthenticated: false,
  });

  public readonly state$ = this.authState$.asObservable();

  public get isAuthenticated(): boolean {
    return this.authState$.value.isAuthenticated;
  }

  public login(email: string, password: string): Observable<boolean> {
    return this.api.login(email, password).pipe(
      tap((res: ILoginResponseDto) => {
        this.tokenStore.set(res.data.accessToken);
        this.authState$.next({ isAuthenticated: true });
      }),
      map(() => true),
    );
  }

  public logout(): Observable<void> {
    return this.api.logout().pipe(
      tap(() => {
        this.tokenStore.clear();
        this.authState$.next({ isAuthenticated: false });
      }),
      map(() => void 0),
    );
  }

  public refresh(): Observable<boolean> {
    return this.api.refresh().pipe(
      tap((res: IRefreshResponseDto) => {
        this.tokenStore.set(res.data.accessToken);
        this.authState$.next({ isAuthenticated: true });
      }),
      map(() => true),
      catchError(() => {
        this.tokenStore.clear();
        this.authState$.next({ isAuthenticated: false });
        return of(false);
      }),
    );
  }

  public getAccessToken(): string | null {
    return this.tokenStore.get();
  }

  public getRole(): Role | null {
    const token = this.getAccessToken();

    if (!token) {
      return null;
    }

    try {
      const payload = jwtDecode<{ role: Role } & JwtPayload>(token);

      if (payload?.role) {
        return payload.role;
      }

      return null;
    } catch {
      return null;
    }
  }
}
