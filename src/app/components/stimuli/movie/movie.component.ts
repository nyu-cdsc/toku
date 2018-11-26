import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stimuli, Responsive } from '../stimuli';
import { Message } from '../../../message';

@Component({
  selector: 'toku-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements Stimuli, Responsive, OnInit {
  @Input() parameters: any; // todo the one other option here is to use a setter and _cast_ the param type to one we create for this component.
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<Message>();
  responseEnabled = false;

  constructor() { }

  ngOnInit() {
  }

  videoEnded() {
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

  // TODO enable the ability to layer invisible buttons/image/div/canvas with coordinates for response over the movie container box, scale properly

  // TODO also enable pause points in the video where the above can then be utilized, so that a single video can just be the entire media, with a list
  // of response{} timecode points/responses
}
