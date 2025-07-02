import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageTitleComponent } from "../../../../shared/typography/page-title/page-title.component";

@Component({
  selector: 'app-courses-index',
  imports: [PageTitleComponent],
  templateUrl: './courses-index.component.html',
  styleUrl: './courses-index.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesIndexComponent {

}
