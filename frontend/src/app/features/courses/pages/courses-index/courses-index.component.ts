import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/typography/page-title/page-title.component';
import { LogoutButtonComponent } from '../../components/logout-button/logout-button.component';
import { AuthenticatedOnly } from '../../../../core/auth/directives/authenticated-only/authenticated-only';

@Component({
  selector: 'app-courses-index',
  imports: [PageTitleComponent, LogoutButtonComponent, AuthenticatedOnly],
  templateUrl: './courses-index.component.html',
  styleUrl: './courses-index.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesIndexComponent {

}
