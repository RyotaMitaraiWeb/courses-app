import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserStore } from './core/auth/services/user-store/user-store';
import { AuthService } from './core/auth/services/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'frontend';

  private readonly userStore = inject(UserStore);
  private readonly authService = inject(AuthService);

  ngOnInit() {
    this.authService.refreshSession().subscribe(user => {
      this.userStore.setUser(user);
    });
  }
}
