import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesIndexComponent } from './courses-index.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('CoursesIndexComponent', () => {
  let component: CoursesIndexComponent;
  let fixture: ComponentFixture<CoursesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesIndexComponent],
      providers: [provideZonelessChangeDetection(), provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
