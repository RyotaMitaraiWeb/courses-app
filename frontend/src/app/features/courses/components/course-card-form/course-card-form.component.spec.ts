import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardFormComponent } from './course-card-form.component';

describe('CourseCardFormComponent', () => {
  let component: CourseCardFormComponent;
  let fixture: ComponentFixture<CourseCardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardFormComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
