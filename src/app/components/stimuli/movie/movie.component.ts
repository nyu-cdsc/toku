import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stimuli, Parameters, Responsive, StimuliResponse } from '../stimuli';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements Stimuli, Responsive, OnInit {
  @Input() parameters: Parameters; // todo this should be Parameters | movieParameters and be instantiated by onInit()
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<StimuliResponse>();
  responseEnabled = true;

  constructor() { }

  ngOnInit() {
  }

  videoEnded() {
    this.done();
  }

  done() {
    this.doneEvent.emit(null);
  }

  sendStimuliResponse(value) {
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

export class MovieParameters implements Parameters {
  disable: boolean; // for now..
  file: string;

  validate() { }
}
