import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../types';

@Component({
  selector: 'app-visibility-off-icon',
  imports: [],
  templateUrl: './visibility-off-icon.component.html',
  styleUrl: './visibility-off-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisibilityOffIconComponent implements IconComponent {
  className = input('');
}
