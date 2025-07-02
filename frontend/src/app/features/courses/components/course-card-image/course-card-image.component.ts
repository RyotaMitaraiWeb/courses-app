import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Course } from '../../types';
import { ImageIconComponent } from '../../../../shared/icons/image-icon/image-icon.component';

@Component({
  selector: 'app-course-card-image',
  imports: [ImageIconComponent],
  templateUrl: './course-card-image.component.html',
  styleUrl: './course-card-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardImageComponent {
  course = input.required<Course>();
  protected readonly src = computed(() => this.course().imagePath);
}
