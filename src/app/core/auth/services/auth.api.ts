import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';
import { ILoginRequestDto, ILoginResponseDto } from '../dto/login.dto';
import { Observable } from 'rxjs';
import { IRefreshResponseDto } from '../dto/refresh.dto';
import { ILogoutResponseDto } from '../dto/logout.dto';

@Injectable({ providedIn: 'root' })
export class AuthApi {
  private http = inject(HttpClient);
  private config = inject(ConfigService);

  private get baseUrl(): string {
    return this.config.value.api.baseUrl;
  }

  public login(email: string, password: string): Observable<ILoginResponseDto> {
    const payload: ILoginRequestDto = { email, password };
    return this.http.post<ILoginResponseDto>(
      `${this.baseUrl}/auth/login`,
      payload,
      { withCredentials: true },
    );
  }

  public refresh(): Observable<IRefreshResponseDto> {
    return this.http.post<IRefreshResponseDto>(
      `${this.baseUrl}/auth/refresh`,
      {},
      { withCredentials: true },
    );
  }

  public logout(): Observable<ILogoutResponseDto> {
    return this.http.post<ILogoutResponseDto>(
      `${this.baseUrl}/auth/logout`,
      {},
      { withCredentials: true },
    );
  }
}
