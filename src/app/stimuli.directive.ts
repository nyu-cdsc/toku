import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[stimuli]'
})
export class StimuliDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
