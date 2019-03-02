import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { ClickArea } from './area';
import { Message } from '../../../message';


@Component({
  selector: 'toku-map',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnChanges {
  // @Input() coords: any;
  @Input() params: any;
  @Output() selectionEvent = new EventEmitter<Message>();
  areas: ClickArea[] = [];
  // @Input() scalingFactor = window.devicePixelRatio;
  // todo ^ make a setter for coordParams? is that doable?

  constructor() { }

  ngOnChanges() {
    for (const v of this.params.coordinates) {
      this.areas.push(new ClickArea(v));
    }
  }

  click(val) {
    console.log('AREA SELECTED!', val);
    this.selectionEvent.emit(<Message>{ value: val });
    // todo used should be set here, but it needs to be passed back to Stimuli so it can be sent up in Message
    // todo or is used set by parent based on if responses going yet, and they send new set of params back to us and we reload?

  }

  getCoordinates(scalingFactor = this.params.scalingFactor || 1) {
    const coords = this.areas.map(area => {
      if (!area.used) {
        const scaledCoords = area.coordinates.map(v => {
          return String(Math.floor(v * scalingFactor)); // .95 on surface book
        });

        return {
          coordinates: scaledCoords.join(','),
          shape: area.shape,
          value: area.value
        };
      }
    });
    console.log(coords, 'these are the scaled coords');
    return coords;
  }
}

// Syntax
// <area coords="value">
// Attribute Values
// Value 	Description
// x1,y1,x2,y2 	Specifies the coordinates of the top-left and bottom-right corner of the rectangle (shape="rect")
// x,y,radius 	Specifies the coordinates of the circle center and the radius (shape="circle")
// x1,y1,x2,y2,..,xn,yn 	Specifies the coordinates of the edges of the polygon. If the first and last coordinate
// pairs are not the same, the browser will add the last coordinate pair to close the polygon(shape = "poly")
