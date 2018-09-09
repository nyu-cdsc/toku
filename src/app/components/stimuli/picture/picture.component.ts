import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stimuli, Responsive } from '../stimuli';
import { MapComponent } from '../../responders/coordinate/coordinate.component';
import { Coordinate } from '../../responders/coordinate/coordinate';
import { Message } from '../../../message';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements Stimuli, Responsive, OnInit {
  @Input() parameters: any;
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<Message>();
  responseEnabled = true; // this can be disabled by parent via [responseEnabled]
  // todo ^ don't create map component UNTIL this is enabled, to prevent 'used' from being set prematurely

  constructor() { }
  ngOnInit() { }

  sendMessage(message: Message) {
    console.log('message received in pic! is', message);
    // Response val as in the one inside Params and choice made (perhaps change Response to Choice to make it clear the level it's from)
    // if (!this.responseEnabled) {
    //   return null; // todo don't do this here, have it determine whether the responder is instantiated at all
    // }
    // const response: Message = { value: value + 1 };
    this.responseEvent.emit(message);

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