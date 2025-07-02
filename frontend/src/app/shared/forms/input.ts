import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'textarea[appInput], input[appInput]',
})
export class Input {
  public readonly el = inject(ElementRef<HTMLTextAreaElement | HTMLInputElement>);
}
