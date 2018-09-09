import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ClickArea, Coordinate } from './coordinate';
import { Message } from '../../../message';


@Component({
  selector: 'toku-map',
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.css']
})
export class MapComponent implements OnInit {
  // @Input() coords: any;
  @Input() parameters: any;
  @Output() selectionEvent = new EventEmitter<any>(); // todo refine?
  areas: ClickArea[] = [];
  // todo ^ make a setter for coordParams? is that doable?

  constructor() { }

  ngOnInit() {
    for (const v of this.parameters.coordinates) {
      this.areas.push(new ClickArea(v));
    }
    // console.log("PARAMS ARE", this.parameters);
    // const coords = this.parameters.coordinates;
  }

  click(val) {
    console.log('AREA SELECTED!', val);
    this.selectionEvent.emit(<Message>{ value: val })
    // todo used should be set here, but it needs to be passed back to Stimuli so it can be sent up in Message
    // todo or is used set by parent based on if responses going yet, and they send new set of params back to us and we reload?

  }

  getCoordinates() {
    const coords = this.areas.map(val => {
      if (!val.used) {
        let res = val.area.coordinates.map(v => {
          return String(Math.floor(v * 0.86)) // .95 on surface book
        });

        return {
          coordinates: res.join(','),
          shape: val.area.shape,
          value: val.value
        }
      }
    });

    return coords;
  }
}

// Syntax
// <area coords="value">
// Attribute Values
// Value 	Description
// x1,y1,x2,y2 	Specifies the coordinates of the top-left and bottom-right corner of the rectangle (shape="rect")
// x,y,radius 	Specifies the coordinates of the circle center and the radius (shape="circle")
// x1,y1,x2,y2,..,xn,yn 	Specifies the coordinates of the edges of the polygon. If the first and last coordinate pairs are not the same, the browser will add the last coordinate pair to close the polygon (shape="poly")