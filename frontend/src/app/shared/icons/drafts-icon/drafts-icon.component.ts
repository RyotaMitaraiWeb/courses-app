import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../types';

@Component({
  selector: 'app-drafts-icon',
  imports: [],
  templateUrl: './drafts-icon.component.html',
  styleUrl: './drafts-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraftsIconComponent implements IconComponent {
  className = input('');
}
