import { ChangeDetectionStrategy, Component, input, OnInit, output } from '@angular/core';
import { Course } from '../../types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseCardImageComponent } from '../course-card-image/course-card-image.component';
import { CheckIconComponent } from '../../../../shared/icons/check-icon/check-icon.component';

@Component({
  selector: 'app-course-card-form',
  imports: [CourseCardImageComponent, ReactiveFormsModule, CheckIconComponent],
  templateUrl: './course-card-form.component.html',
  styleUrl: './course-card-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardFormComponent implements OnInit {
  course = input.required<Course>();
  afterEdit = output();

  readonly form = new FormGroup({
    title: new FormControl('', { validators: [Validators.required]}),
    description: new FormControl('', { validators: [Validators.required]}),
  });

  ngOnInit() {
    const { title, description } = this.course();
    this.form.setValue({ title, description });
  }

  submit(event: Event) {
    event.preventDefault();
    this.afterEdit.emit();
  }
}
