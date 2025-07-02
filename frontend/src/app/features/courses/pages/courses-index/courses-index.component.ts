import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/typography/page-title/page-title.component';
import { LogoutButtonComponent } from '../../components/logout-button/logout-button.component';
import { AuthenticatedOnly } from '../../../../core/auth/directives/authenticated-only/authenticated-only';
import { LoginButtonComponent } from '../../components/login-button/login-button.component';
import { GuestOnly } from '../../../../core/auth/directives/guest-only/guest-only';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Course } from '../../types';

@Component({
  selector: 'app-courses-index',
  imports: [PageTitleComponent, LogoutButtonComponent, AuthenticatedOnly, GuestOnly, LoginButtonComponent, CourseCardComponent],
  templateUrl: './courses-index.component.html',
  styleUrl: './courses-index.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesIndexComponent {
  sampleCourse: Course = {
    id: 1,
    title: 'test we ewrer er er er wee',
    description: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    imagePath: 'http://localhost:3000/static/courses-images/tango-course.png',
  };
}
