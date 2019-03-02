import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

import { Stimuli, Responsive } from '../stimuli';
import { Message } from '../../../message';

@Component({
  selector: 'toku-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements Stimuli, Responsive, OnInit {
  @Input() parameters: any; // todo the one other option here is to use a setter and _cast_
  // the param type to one we create for this component.
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<Message>();
  responseEnabled = false;
  pictureParameters = null;
  @ViewChild('thevideo') thevideo: ElementRef;

  constructor() { }

  ngOnInit() {
    // setting up parameters for the "invisible picture" that hosts responses coordinates
    if (this.parameters.coordinates) {
      this.pictureParameters = {};
      this.pictureParameters.coordinates = this.parameters.coordinates;
      this.pictureParameters.filename = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
      if (this.thevideo.nativeElement.videoWidth > innerWidth) {
        this.pictureParameters.width = innerWidth * .80;
        this.pictureParameters.nativeWidth = this.thevideo.nativeElement.videoWidth;
        this.pictureParameters.nativeHeight = this.thevideo.nativeElement.videoHeight;
        this.pictureParameters.height = innerHeight * .80 * ((innerWidth / innerHeight) /
          (this.pictureParameters.nativeWidth / this.pictureParameters.nativeHeight));
        console.log(this.pictureParameters, 'the picture paramters');
      } else {
        this.pictureParameters.width = this.thevideo.nativeElement.videoWidth;
        this.pictureParameters.height = this.thevideo.nativeElement.videoHeight;
      }
    }
  }

  cssClass() {
    if (this.thevideo.nativeElement.videoWidth > innerWidth) {
      return 'largeVideo';
    } else {
      return 'smallVideo';
    }
  }

  videoStarted() {
    // setting width and height for "invisible picture"
    if (this.parameters.coordinates) {
      if (this.thevideo.nativeElement.videoWidth > innerWidth) {
        this.pictureParameters.width = innerWidth * .80;
        this.pictureParameters.nativeWidth = this.thevideo.nativeElement.videoWidth;
        this.pictureParameters.nativeHeight = this.thevideo.nativeElement.videoHeight;
        this.pictureParameters.height = innerHeight * .80 * ((innerWidth / innerHeight) /
          (this.pictureParameters.nativeWidth / this.pictureParameters.nativeHeight));
      } else {
        this.pictureParameters.width = this.thevideo.nativeElement.videoWidth;
        this.pictureParameters.height = this.thevideo.nativeElement.videoHeight;
      }
    }
  }

  videoEnded() {
    // allows for response (if coordinates for response are set); otherwise, moves on to next stimuli
    if (this.parameters.coordinates) {
      this.responseEnabled = true;
    } else {
      this.done();
    }
  }

  enableResponse() {
    // ability to respond is delayed if delayResponse parameter set in config file
    if (this.parameters.delayResponse) {
      if (this.parameters.delayResponse < this.thevideo.nativeElement.currentTime) {
        this.responseEnabled = true;
      }
    }
  }

  done() {
    this.doneEvent.emit(null);
  }

  sendMessage(message: Message) {
    if (!this.responseEnabled) {
      return null;
    } else {
      console.log('message received in movie! is', message);
      // todo Response val as in the one inside Params and choice made (perhaps change Response to Choice to make
      // it clear the level it's from)
      this.responseEvent.emit(message);
      // todo support multiple reponses in future
      this.done();
    }
  }

  validate() {
    return true;
  }

  // TODO enable the ability to layer invisible buttons/image/div/canvas with coordinates for response
  // over the movie container box, scale properly

  // TODO also enable pause points in the video where the above can then be utilized, so that a single
  // video can just be the entire media, with a list
  // of response{} timecode points/responses
}
