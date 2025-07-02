import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Course } from '../../types';
import { CourseCardImageComponent } from '../course-card-image/course-card-image.component';

@Component({
  selector: 'app-course-card',
  imports: [CourseCardImageComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  course = input.required<Course>();
}
