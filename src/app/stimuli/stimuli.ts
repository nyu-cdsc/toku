import { EventEmitter } from '@angular/core';

export interface Stimuli {
  parameters: any;
  doneEvent: EventEmitter<any>;
  responseEvent: EventEmitter<any>;
  responseEnabled: boolean;
  sendResponse(value: any);
}

// or, create a class like Control but different for stimuli, that just includes the things they need
// or in addition to control
// should this be a class or an interface?
// it should just be an interface because they will all be different
export interface Parameters {
  disable: boolean; // for now..
  // file?: string[]; // is optional possible in an interface?
}

export interface SimpleResponse {
  value: any;
  // what else should go here?
}
