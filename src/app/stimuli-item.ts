import { Type } from '@angular/core';
import { Stimuli, Parameters } from './stimuli/stimuli';

export class StimuliItem {
  // constructor(public component: Type<any>, public data: any) {}

  // constructor(public component: Stimuli, public params: Parameters) { }
  constructor(public component: Type<any>) { }
}
