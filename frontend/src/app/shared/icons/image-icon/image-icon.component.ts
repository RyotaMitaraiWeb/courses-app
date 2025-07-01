import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../types';

@Component({
  selector: 'app-image-icon',
  imports: [],
  templateUrl: './image-icon.component.html',
  styleUrl: './image-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageIconComponent implements IconComponent {
  className = input('');
}
