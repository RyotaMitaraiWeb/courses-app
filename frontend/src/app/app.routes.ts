import { Routes } from '@angular/router';
import { authRoutes } from './core/auth/routes';
import { coursesRoutes } from './features/courses/pages/routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses',
  },
  ...authRoutes,
  ...coursesRoutes,
];
