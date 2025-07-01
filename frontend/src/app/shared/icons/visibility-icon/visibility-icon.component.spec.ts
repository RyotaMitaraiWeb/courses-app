import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityIconComponent } from './visibility-icon.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('VisibilityIconComponent', () => {
  let component: VisibilityIconComponent;
  let fixture: ComponentFixture<VisibilityIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisibilityIconComponent],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisibilityIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
