import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stimuli, Parameters, SimpleResponse } from '../stimuli';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements Stimuli, OnInit {
  @Input() parameters: any;
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<any>();
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

  sendSimpleResponse(value) {
    // Response val as in the one inside Params and choice made (perhaps change Response to Choice to make it clear the level it's from)
    if (!this.responseEnabled) {
      return null;
    }
    const response: SimpleResponse = { value: value + 1 };
    // todo change this to send a modified version of the Response object that'll be inside the Params sent to us

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
// export class Coordinate {
//   coordinate: string;
//
//   validate() {}
// }

export class PictureParameters implements Parameters {
  disable: boolean; // for now..
  // coordinates: Coordinates;

  validate() { }
}

// could literally return the modifiedParameters object along with its type definition..
