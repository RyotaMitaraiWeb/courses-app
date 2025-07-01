import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../types';

@Component({
  selector: 'app-search-icon',
  imports: [],
  templateUrl: './search-icon.component.html',
  styleUrl: './search-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchIconComponent implements IconComponent {
  className = input('');
}
