import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Stimuli, Parameters } from '../stimuli';
import { ResponseService } from '../../services/response/response.service';
import { Response } from '../../services/response/response';
import { StimloaderDirective } from '../../stimloader.directive';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements Stimuli, OnInit {
  @Input() parameters: any;
  @Output() finishedEvent = new EventEmitter<any>();
  @ViewChild(StimloaderDirective) stimDirective: StimloaderDirective;

  // TODO property here to receive finishedEvent from child(ren)

  responseEnabled = true;
  // response: Response;
  responseService: ResponseService;
  // consumedCoords = null;
  modifiedParameters: {};

  constructor(responseService: ResponseService) {
    this.responseService = responseService;
  }
  ngOnInit() { }

  setResponseEnabled() {
    if (this.parameters.children) {

    }

    if (this.parameters.delay) { }
  }

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

  blockedCoordinates() {
    if (this.parameters.coordinates) {
      return this.parameters.coordinates.filter(value => {
        return value.disabled; // send back only the disabled coordinate areas
      });
    }

    return null;
  }

  // todo actionable stimuli and display stimuli?

  // two functions - one at this level and one above
  // but at the end should be something that fits into response.data.response - so just send that
  sendResponse(value) {
    if (!this.responseEnabled) {
      return null;
    }
    const response = new Response();
    // response.data.participant = this.participant;
    // response.data.action = this.action.id; // TODO how to get?
    response.data.response.push(value + 1); // todo test this logic
    // this.response = response;

    // TODO make spec/test
    // this.consumedCoords[value] = true;
    this.setModifiedParameters(value);
    this.responseService.setResponse(response);
    this.done();
  }

  // TODO make coordinates a Map()!
  setModifiedParameters(value) {
    this.modifiedParameters = { coordinates: this.parameters.coordinates };

    // const idx = this.modifiedParameters.coordinates.indexOf(value);
    // this.modifiedParameters.coordinates[idx].disabled = true;
  }

  // TODO
  // send back optional Parameters to the parent, which can then be sent through a ControlService filter function
  // and passed on to the following members when the Control for the group has a property marked 'sequence'
  //
  // that'll do for now
  // can send back object that packages both modified values and the response
  done() {
    console.log('calling DONE!');
    this.finishedEvent.emit(null);
    // this.finishedEvent.emit(this.modifiedParameters);
  }

}

// TODO if I make this a class, I can attach a function to its prototype to manage things like disabling coordinates inside of it!
// and then I'd be removing that responsibility from images - along with ALL coordinate responsibilities!
// export class Coordinate {
//   coordinate: string;
// }

export class PictureParameters implements Parameters {
  disable: boolean; // for now..
  // coordinates: Coordinates;
}

// could literally return the modifiedParameters object along with its type definition..
