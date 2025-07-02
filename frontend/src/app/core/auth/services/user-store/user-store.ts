import { computed, Injectable, signal } from '@angular/core';
import { UserState } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  static emptyUser: UserState = {
    id: 0,
    email: '',
  };

  // ensure that users cannot modify the state directly
  private readonly _user = signal<UserState>(UserStore.emptyUser);
  readonly user = computed(() => this._user());

  setUser(state: UserState) {
    this._user.set(state);
  }

  logoutUser() {
    this._user.set(UserStore.emptyUser);
  }

  readonly isAuthenticated = computed(() => this._user().id !== 0);
}
