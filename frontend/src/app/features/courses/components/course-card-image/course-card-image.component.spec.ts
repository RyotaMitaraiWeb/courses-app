import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardImageComponent } from './course-card-image.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { CourseService } from '../../services/course/course.service';

describe('CourseCardImageComponent', () => {
  let component: CourseCardImageComponent;
  let fixture: ComponentFixture<CourseCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardImageComponent],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardImageComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('course', CourseService.emptyCourse);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
