import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../types';

@Component({
  selector: 'app-edit-icon',
  imports: [],
  templateUrl: './edit-icon.component.html',
  styleUrl: './edit-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditIconComponent implements IconComponent {
  className = input('');
}
