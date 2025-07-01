import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIconComponent } from './search-icon.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SearchIconComponent', () => {
  let component: SearchIconComponent;
  let fixture: ComponentFixture<SearchIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchIconComponent],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
