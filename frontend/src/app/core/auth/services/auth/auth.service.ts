import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment.development';
import { UserState } from '../../types';

const api = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  readonly endpoints = {
    login: `${api}/auth/login`,
    refresh: `${api}/auth/refresh`,
  };

  login(body: LoginCredentials) {
    return this.http.post<SuccessfulLoginRequestBody>(this.endpoints.login, body);
  }

  refreshSession() {
    return this.http.post<UserState>(this.endpoints.refresh, {});
  }
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface SuccessfulLoginRequestBody {
  access_token: string;
}
