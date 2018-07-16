import { Component, OnInit, Input, Output, EventEmitter, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Stimuli, Parameters } from '../stimuli';
import { ResponseService } from '../../services/response/response.service';
import { Response } from '../../services/response/response';
import { buildStimuli, stimuliComponentResolver } from '../utils';
import { StimloaderDirective } from '../../stimloader.directive';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements Stimuli, OnInit {
  @Input() parameters: any;
  @Output() finishedEvent = new EventEmitter<boolean>();
  // @Output() responseEvent = new EventEmitter<boolean>();
  @ViewChild(StimloaderDirective) stimDirective: StimloaderDirective;

  responseEnabled = false;
  consumedCoords = null;

  constructor() { }
  ngOnInit() { }

  getCoordinates() {
    if (!this.responseEnabled) {
      return null;
    }

    let coords = this.parameters.coordinate;

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
    if (this.consumedCoords) {
      return this.consumedCoords;
    }

    return null;
  }

  setValue(value) {
    // this.buttonResponse = value;
    // console.log(this.buttonResponse, "is the button response");
    // this.nextTrial(this.buttonResponse);
  }

  // two functions - one at this level and one above
  // over here we should only be sending the raw data from the stimuli - which can vary among them
  // but at the end should be something that fits into response.data.response - so just return that
  sendResponse(value) {
    const responseService = new ResponseService;
    const response = new Response();
    // response.data.participant = this.participant;
    // response.data.study = this.study.name;
    // response.data.block = this.block.id;
    // response.data.trial = this.trial.id;
    response.data.response.push(value + 1); // todo test this logic

    // TODO make spec/test
    this.consumedCoords[value] = true;
    responseService.setResponse(response);
  }

  done() {
    this.finishedEvent.emit(true);
  }

  buildStimuli(stimuli: Stimuli, view: ViewContainerRef, resolver: ComponentFactoryResolver) {
    const componentFactory = resolver.resolveComponentFactory(stimuliComponentResolver(stimuli));
    view.clear();

    const componentRef = view.createComponent(componentFactory);
    (<Stimuli>componentRef.instance).parameters = stimuli.parameters;
  }
}

// export class Coordinate {
//   coordinate: string;
// }

export class PictureParameters implements Parameters {
  disable: boolean; // for now..
}
