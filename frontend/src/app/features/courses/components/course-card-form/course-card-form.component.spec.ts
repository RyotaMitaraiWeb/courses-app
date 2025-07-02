import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardFormComponent } from './course-card-form.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { CourseService } from '../../services/course/course.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CourseCardFormComponent', () => {
  let component: CourseCardFormComponent;
  let fixture: ComponentFixture<CourseCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardFormComponent],
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardFormComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('course', CourseService.emptyCourse);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
