import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/typography/page-title/page-title.component';
import { LogoutButtonComponent } from '../../components/logout-button/logout-button.component';
import { AuthenticatedOnly } from '../../../../core/auth/directives/authenticated-only/authenticated-only';
import { LoginButtonComponent } from '../../components/login-button/login-button.component';
import { GuestOnly } from '../../../../core/auth/directives/guest-only/guest-only';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Course } from '../../types';
import { CourseService } from '../../services/course/course.service';
import { combineLatest, debounceTime, distinctUntilChanged, map, startWith, Subject, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '../../../../shared/forms/app-form-field/form-field.component';
import { Input } from '../../../../shared/forms/input';
import { SearchIconComponent } from '../../../../shared/icons/search-icon/search-icon.component';

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
    ReactiveFormsModule,
    FormFieldComponent,
    Input,
    SearchIconComponent,
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
  private readonly refreshSubject = new Subject<void>();
  private readonly refresh$ = this.refreshSubject.asObservable();

  readonly query = new FormControl('');
  readonly queryChanges$ = this.query.valueChanges
    .pipe(
      startWith(''),
      debounceTime(500),
      distinctUntilChanged(),
    );

  readonly search$ = combineLatest([this.refresh$.pipe(startWith(null)), this.queryChanges$]);

  protected courses$ = this.search$
    .pipe(
      switchMap((changes) => this.courseService.get({ query: changes[1] || '' })),
      map(courses => {
        return courses.map(c => ({...c, imagePath: this.courseService.courseImagesUrl + '/' + c.imagePath}));
      }),
    );

  refresh() {
    this.refreshSubject.next();
  }
}
