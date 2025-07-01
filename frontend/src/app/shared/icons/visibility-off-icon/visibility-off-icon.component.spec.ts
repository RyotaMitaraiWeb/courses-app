import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityOffIconComponent } from './visibility-off-icon.component';

describe('VisibilityOffIconComponent', () => {
  let component: VisibilityOffIconComponent;
  let fixture: ComponentFixture<VisibilityOffIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisibilityOffIconComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisibilityOffIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
