import { EventEmitter } from '@angular/core';
import { Message } from '../../message';

export interface Stimuli {
  parameters: any;
  doneEvent: EventEmitter<any>;
  validate(): boolean; // todo change to exception or error message that's more detailed?
}

export interface Responsive {
  responseEvent: EventEmitter<any>;
  responseEnabled: boolean;
  sendMessage(message: Message);
}
