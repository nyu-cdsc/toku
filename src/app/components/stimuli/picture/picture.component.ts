import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stimuli, Responsive } from '../stimuli';
import { Message } from '../../../message';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements Stimuli, Responsive, OnInit {
  @Input() parameters: any;
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<Message>();
  @Input() responseEnabled = true; // this can be disabled by parent via [responseEnabled]

  constructor() { }
  ngOnInit() { }

  sendMessage(message: Message) {
    console.log('message received in pic! is', message);
    // todo Response val as in the one inside Params and choice made (perhaps change Response to Choice to make it clear the level it's from)
    this.responseEvent.emit(message);
    // todo support multiple reponses in future
    this.done();
  }

  validate() {
    return true;
  }

  done() {
    this.doneEvent.emit(null);
  }

}
