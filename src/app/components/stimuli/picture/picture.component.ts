import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stimuli, Responsive, Parameters, StimuliResponse } from '../stimuli';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements Stimuli, Responsive, OnInit {
  @Input() parameters: Parameters | PictureParameters;
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<StimuliResponse>();
  responseEnabled = true; // this can be disabled by parent via [responseEnabled]
  
  constructor() { }
  ngOnInit() { }

  // todo just call from appropriate point - e.g. when audio ends
  // todo this would actually be controlled by the parent
  // TODO although, if this is kept stateless and a NEW response object is made from the one in params,
  // with 'used' set to true, and we keep making new ones and put the responsibility on the parent
  // whether to use them or not -- that would work
  // but this would be fine too and might be useful to indicate that a button can't be clicked yet, etc.
  // todo think on both ^

  // TODO need to redo the blockedCoords functionality - 'used' => true etc.
  getCoordinates() {
    if (!this.responseEnabled) {
      return null;
    }

    let coords = this.parameters.coordinates;

    coords = coords.map(val => {
      let res = val.coordinate.split(',');
      res = res.map(v => {
        return String(Math.floor(Number(v) * 0.86)); // .95 if on surface book
      });

      return {
        coordinate: res.join(',')
      };
    });

    return coords;
  }

  getCssCoordinates(coords) {
    let res = coords.split(',');
    res = res.map(val => {
      val = val - 80; // todo make the box size set somewhere and use that var
      if (val < 0) {
        val = 0;
      }

      return val + 'px';
    });
    return res;
  }

  sendStimuliResponse(value) {
    // Response val as in the one inside Params and choice made (perhaps change Response to Choice to make it clear the level it's from)
    if (!this.responseEnabled) {
      return null;
    }
    const response: StimuliResponse = { value: value + 1, used: true }; // todo remove used? idk
    // todo change this to send a modified version of the Response object that'll be inside the Params sent to us
    this.responseEvent.emit(response);

    this.done();
  }

  validate() {
    return true;
  }

  done() {
    this.doneEvent.emit(null);
  }

}

// TODO if I make this a class, I can attach a function to its prototype to manage things like disabling coordinates inside of it!
// TODO make coordinates a Map()!
// and then I'd be removing that responsibility from images - along with ALL coordinate responsibilities!


export class Coordinate implements StimuliResponse {
  coordinate: Map<string, string>; // e.g. top, right, bottom, left (or just make it a list and have it be implicit)
  // todo coordinateBox^ ?
  value: string;
  used: boolean;
  // TODO - ideally the stimuliresponse would be the entire Coordinate object..
  // - why? the value is the identifier -- the actual coord does not matter. though it could help to have the whole thing to ease swapping stuff out functionally..
  // but in reality all that matters is flipping the 'used' property, which can be done with a simple map or find()
  // the interface might still work? it just needs value (and perhaps 'used') to be satisfied -- more can be included

  validate() {}
}

export class PictureParameters implements Parameters {
  disable: boolean; // for now..
  coordinates: Coordinate[];

  validate() { }
}

// could literally return the modifiedParameters object along with its type definition..
