import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[stimLoader]'
})
export class StimloaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
