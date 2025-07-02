import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/typography/page-title/page-title.component';
import { FormFieldComponent } from '../../../shared/forms/app-form-field/form-field.component';
import { Input } from '../../../shared/forms/input';
import { DraftsIconComponent } from '../../../shared/icons/drafts-icon/drafts-icon.component';

@Component({
  selector: 'app-login-page',
  imports: [PageTitleComponent, FormFieldComponent, Input, DraftsIconComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

}
