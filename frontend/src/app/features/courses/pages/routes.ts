import { Route } from '@angular/router';
import { CoursesIndexComponent } from './courses-index/courses-index.component';

export const coursesRoutes: Route[] = [
  {
    path: 'courses',
    component: CoursesIndexComponent,
  },
];