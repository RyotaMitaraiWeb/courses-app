import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';

const api = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  readonly endpoints = {
    login: `${api}/auth/login`,
  };

  login(body: LoginCredentials) {
    return this.http.post<SuccessfulLoginRequestBody>(this.endpoints.login, body);
  }
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface SuccessfulLoginRequestBody {
  access_token: string;
}