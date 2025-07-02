import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Course } from '../../types';
import { CourseCardImageComponent } from '../course-card-image/course-card-image.component';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-course-card',
  imports: [CourseCardImageComponent, TruncatePipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  course = input.required<Course>();
  protected readonly maxDescriptionLength = 120;
}
