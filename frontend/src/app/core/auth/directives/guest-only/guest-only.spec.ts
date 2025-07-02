import { ChangeDetectionStrategy, Component, provideZonelessChangeDetection } from '@angular/core';
import { GuestOnly } from './guest-only';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStore } from '../../services/user-store/user-store';

@Component({
  template: `
    <div id="test" *appGuestOnly>Guest Content</div>
  `,
  standalone: true,
  imports: [GuestOnly],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestComponent {}

describe('GuestOnly', () => {
  let fixture: ComponentFixture<TestComponent>;
  let store: UserStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, GuestOnly],
      providers: [UserStore, provideZonelessChangeDetection()],

    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    store = TestBed.inject(UserStore);
    fixture.detectChanges();
  });

  it('correctly shows the element depending on the user state', () => {
    const el = () => document.querySelector('#test');

    store.logoutUser();

    fixture.detectChanges();

    expect(el()).not.toBeNull();

    store.setUser({ id: 1, email: 'a' });

    fixture.detectChanges();

    expect(el()).toBeNull();

    store.logoutUser();

    fixture.detectChanges();

    expect(el()).not.toBeNull();
  });
});
