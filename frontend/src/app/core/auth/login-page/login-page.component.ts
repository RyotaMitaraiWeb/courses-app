import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/typography/page-title/page-title.component';

@Component({
  selector: 'app-login-page',
  imports: [PageTitleComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

}
