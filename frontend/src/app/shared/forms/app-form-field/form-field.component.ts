import { ChangeDetectionStrategy, Component, computed, contentChild, input, ViewEncapsulation } from '@angular/core';
import { Input } from '../input';

@Component({
  selector: 'app-form-field',
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldComponent {
  variant = input<formFieldVariant>('fill');

  focusTextField() {
    const field = this.textField();

    field?.el.nativeElement.focus();
  }

  textField = contentChild(Input);

  protected readonly formFieldWrapperClasses = computed(() => [
    this.variant(),
    'w-full',
    'form-field-wrapper',
    'rounded-3xl',
    'flex',
    'flex-row',
    'gap-x-[10px]',
    'py-2',
    'px-4',
    'text-app-blue-500',
  ]);
}

type formFieldVariant = 'fill' | 'transparent';
