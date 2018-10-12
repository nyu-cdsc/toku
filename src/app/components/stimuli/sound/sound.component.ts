import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stimuli, Responsive } from '../stimuli';

import { Message } from '../../../message';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent implements Stimuli, Responsive, OnInit {
  @Input() parameters: any; // todo the one other option here is to use a setter
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<Message>();
  responseEnabled = false;

  constructor() { }

  ngOnInit() {
  }

  audioEnded() {
    this.done();
  }

  done() {
    this.doneEvent.emit(null);
  }

  sendMessage(message: Message) {
    if (!this.responseEnabled) {
      return null;
    }

  }

  validate() {
    return true;
  }

}
