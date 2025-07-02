import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardImageComponent } from './course-card-image.component';

describe('CourseCardImageComponent', () => {
  let component: CourseCardImageComponent;
  let fixture: ComponentFixture<CourseCardImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardImageComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
