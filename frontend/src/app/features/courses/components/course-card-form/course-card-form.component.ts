import { ChangeDetectionStrategy, Component, input, OnInit, output, viewChild, AfterViewInit, inject, OnDestroy } from '@angular/core';
import { Course } from '../../types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseCardImageComponent } from '../course-card-image/course-card-image.component';
import { CheckIconComponent } from '../../../../shared/icons/check-icon/check-icon.component';
import { Input } from '../../../../shared/forms/input';
import { CourseService } from '../../services/course/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-card-form',
  imports: [CourseCardImageComponent, ReactiveFormsModule, CheckIconComponent, Input],
  templateUrl: './course-card-form.component.html',
  styleUrl: './course-card-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardFormComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly coursesService = inject(CourseService);

  course = input.required<Course>();
  afterEdit = output();

  protected readonly firstInput = viewChild(Input);

  readonly form = new FormGroup({
    title: new FormControl('', { validators: [Validators.required]}),
    description: new FormControl('', { validators: [Validators.required]}),
  });

  ngOnInit() {
    const { title, description } = this.course();
    this.form.setValue({ title, description });
  }

  ngAfterViewInit() {
    this.firstInput()?.el.nativeElement.focus();
  }

  submit(event: Event) {
    event.preventDefault();
    const courseId = this.course().id;
    const value = {
      title: this.form.value.title || '',
      description: this.form.value.description || '',
    };

    this.editSub = this.coursesService.edit(courseId, value)
      .subscribe(() => {
        this.afterEdit.emit();
      });
  }

  editSub?: Subscription;

  ngOnDestroy() {
    this.editSub?.unsubscribe();
  }
}
