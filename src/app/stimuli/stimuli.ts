import { EventEmitter } from '@angular/core';

export interface Stimuli {
  parameters: any;
  doneEvent: EventEmitter<any>;
  responseEvent: EventEmitter<any>;
  responseEnabled: boolean;
  sendSimpleResponse(value: any);
  validate(): boolean; // todo change to exception or error message that's more detailed?
}

// or, create a class like Control but different for stimuli, that just includes the things they need
// or in addition to control
// should this be a class or an interface?
// it should just be an interface because they will all be different
export class Parameters {
  disable: boolean; // for now..
  // file?: string[]; // is optional possible in an interface?
}

export interface SimpleResponse {
  value: any;
  // what else should go here?
}
