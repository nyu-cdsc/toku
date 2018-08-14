import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stimuli, Parameters } from '../stimuli';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements Stimuli, OnInit {
  @Input() parameters: any;
  @Output() finishedEvent = new EventEmitter<any>();
  responseEnabled = true;

  constructor() { }

  ngOnInit() {
  }

  videoEnded() {
    this.done();
  }

  done() {
    this.finishedEvent.emit(null);
  }

  sendResponse(value) {
    if (!this.responseEnabled) {
      return null;
    }
    // const response = new Response();
    // response.data.participant = this.participant;
    // response.data.action = this.action.id; // TODO how to get?
    // response.data.response.push(value + 1); // todo test this logic
    // this.response = response;

    // TODO make spec/test
    // this.consumedCoords[value] = true;
    // this.setModifiedParameters(value);
    // this.responseService.setResponse(response);
  }
}
