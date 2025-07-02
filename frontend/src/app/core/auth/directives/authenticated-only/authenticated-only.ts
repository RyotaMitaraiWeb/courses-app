import { Directive, effect, inject, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserStore } from '../../services/user-store/user-store';

@Directive({
  selector: '[appAuthenticatedOnly]',
})
export class AuthenticatedOnly {

  private readonly user = inject(UserStore);
  private readonly templateRef = inject(TemplateRef<HTMLElement>);
  private readonly viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      const isLoggedIn = this.user.isAuthenticated();
      if (isLoggedIn) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
