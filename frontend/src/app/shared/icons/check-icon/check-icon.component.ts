import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../types';

@Component({
  selector: 'app-check-icon',
  imports: [],
  templateUrl: './check-icon.component.html',
  styleUrl: './check-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckIconComponent implements IconComponent {
  className = input('');
}
