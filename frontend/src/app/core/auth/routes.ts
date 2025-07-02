import { Route } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

export const authRoutes: Route[] = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
];