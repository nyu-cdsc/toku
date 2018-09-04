import { EventEmitter } from '@angular/core';

export interface Stimuli {
  parameters: any;
  doneEvent: EventEmitter<any>;
  validate(): boolean; // todo change to exception or error message that's more detailed?
}

export interface Responsive {
  responseEvent: EventEmitter<any>;
  responseEnabled: boolean;
  sendStimuliResponse(value: any);
}

// or, create a class like Control but different for stimuli, that just includes the things they need
// or in addition to control
// should this be a class or an interface?
// it should just be an interface because they will all be different
export class Parameters {
  disable: boolean; // for now..
  // file?: string[]; // is optional possible in an interface?
}

export interface StimuliResponse {
  value: any;
  used: boolean; // todo not needed, there should be a function / receiver / reducer that sets used to true and passes that NEW object down. bam
  // what else should go here?
}
