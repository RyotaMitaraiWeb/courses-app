import { HttpInterceptorFn } from '@angular/common/http';
import { ACCESS_TOKEN_KEY } from '../../../common/localStorage';

export const bearerTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  let headers = req.headers;

  if (token) {
    headers = headers.append('Authorization', `Bearer ${token}`);
  }

  const tokenizedRequest = req.clone({
    headers,
  });

  return next(tokenizedRequest);
};
