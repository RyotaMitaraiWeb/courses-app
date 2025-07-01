import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../types';

@Component({
  selector: 'app-visibility-icon',
  imports: [],
  templateUrl: './visibility-icon.component.html',
  styleUrl: './visibility-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisibilityIconComponent implements IconComponent {
  className = input('');
}
