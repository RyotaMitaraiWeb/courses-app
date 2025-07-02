import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/typography/page-title/page-title.component';
import { LogoutButtonComponent } from '../../components/logout-button/logout-button.component';
import { AuthenticatedOnly } from '../../../../core/auth/directives/authenticated-only/authenticated-only';
import { LoginButtonComponent } from '../../components/login-button/login-button.component';
import { GuestOnly } from '../../../../core/auth/directives/guest-only/guest-only';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Course } from '../../types';
import { CourseService } from '../../services/course/course.service';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-courses-index',
  imports: [
    PageTitleComponent,
    LogoutButtonComponent,
    AuthenticatedOnly,
    GuestOnly,
    LoginButtonComponent,
    CourseCardComponent,
    AsyncPipe,
  ],
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

  private readonly courseService = inject(CourseService);
  private readonly coursesSubject = new BehaviorSubject<void>(undefined);

  protected courses$ = this.coursesSubject
    .asObservable().pipe(
      switchMap(() => this.courseService.get({ query: '' })),
      map(courses => {
        return courses.map(c => ({...c, imagePath: this.courseService.courseImagesUrl + '/' + c.imagePath}));
      }),
    );
}
