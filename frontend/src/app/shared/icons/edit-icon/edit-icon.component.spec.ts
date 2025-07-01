import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIconComponent } from './edit-icon.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('EditIconComponent', () => {
  let component: EditIconComponent;
  let fixture: ComponentFixture<EditIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditIconComponent],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
