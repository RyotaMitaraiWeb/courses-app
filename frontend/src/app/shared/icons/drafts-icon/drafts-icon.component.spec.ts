import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftsIconComponent } from './drafts-icon.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('DraftsIconComponent', () => {
  let component: DraftsIconComponent;
  let fixture: ComponentFixture<DraftsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftsIconComponent],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
