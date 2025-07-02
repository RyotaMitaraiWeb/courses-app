import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserStore } from '../../../../core/auth/services/user-store/user-store';
import { Router } from '@angular/router';
import { ACCESS_TOKEN_KEY } from '../../../../common/localStorage';

@Component({
  selector: 'app-logout-button',
  imports: [],
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutButtonComponent {
  private readonly userStore = inject(UserStore);
  private readonly router = inject(Router);

  logout(event: Event) {
    event.preventDefault();
    this.userStore.logoutUser();
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['/login']);
  }
}
