import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Course } from '../../types';
import { CourseCardImageComponent } from '../course-card-image/course-card-image.component';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { EditIconComponent } from '../../../../shared/icons/edit-icon/edit-icon.component';
import { AuthenticatedOnly } from '../../../../core/auth/directives/authenticated-only/authenticated-only';
import { CourseCardFormComponent } from '../course-card-form/course-card-form.component';

@Component({
  selector: 'app-course-card',
  imports: [CourseCardImageComponent, TruncatePipe, EditIconComponent, AuthenticatedOnly, CourseCardFormComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  course = input.required<Course>();
  afterEdit = output();
  protected readonly editMode = signal(false);

  protected readonly maxDescriptionLength = 100;
  protected readonly maxTitleLength = 20;

  goInEditMode() {
    this.editMode.set(true);
  }

  handleEditResult() {
    this.editMode.set(false);
    this.afterEdit.emit();
  }
}
