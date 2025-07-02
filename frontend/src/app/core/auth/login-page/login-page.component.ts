import { ChangeDetectionStrategy, Component, signal, OnDestroy, inject } from '@angular/core';
import { PageTitleComponent } from '../../../shared/typography/page-title/page-title.component';
import { FormFieldComponent } from '../../../shared/forms/app-form-field/form-field.component';
import { Input } from '../../../shared/forms/input';
import { DraftsIconComponent } from '../../../shared/icons/drafts-icon/drafts-icon.component';
import { VisibilityIconComponent } from '../../../shared/icons/visibility-icon/visibility-icon.component';
import { VisibilityOffIconComponent } from '../../../shared/icons/visibility-off-icon/visibility-off-icon.component';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ACCESS_TOKEN_KEY } from '../../../common/localStorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    PageTitleComponent,
    FormFieldComponent,
    Input,
    DraftsIconComponent,
    VisibilityIconComponent,
    VisibilityOffIconComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnDestroy {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  passwordIsVisible = signal(false);

  togglePasswordVisibility(event: Event) {
    event.preventDefault();
    this.passwordIsVisible.update(v => !v);
  }

  readonly form = new FormGroup({
    email: new FormControl('', { validators: [Validators.email, Validators.required]}),
    password: new FormControl('', { validators: [Validators.required]}),
  });

  submit(event: Event) {
    event.preventDefault();
    const loginCredentials = {
      email: this.form.value.email || '',
      password: this.form.value.password || '',
    };

    this.loginSub = this.authService
      .login(loginCredentials)
      .subscribe(response => {
        localStorage.setItem(ACCESS_TOKEN_KEY, response.access_token);
        this.router.navigate(['/courses']);
      });
  }

  private loginSub?: Subscription;
  ngOnDestroy() {
    this.loginSub?.unsubscribe();
  }
}
