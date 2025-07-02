import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-button',
  imports: [RouterModule],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginButtonComponent {

}
