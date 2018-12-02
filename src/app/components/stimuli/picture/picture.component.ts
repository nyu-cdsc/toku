import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { Stimuli, Responsive } from '../stimuli';
import { Message } from '../../../message';
import { AreaComponent } from '../../responders/area/area.component';

@Component({
  selector: 'toku-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements Stimuli, Responsive, OnInit, AfterViewChecked {
  @Input() parameters: any;
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<Message>();
  @Input() responseEnabled = true; // this can be disabled by parent via [responseEnabled]
  @ViewChild(AreaComponent) areamap: AreaComponent;
  @ViewChild('theimage') theimage: ElementRef;

  constructor() { }
  ngOnInit() { }
  ngAfterViewChecked() {
    if (this.parameters.height) {
      console.log('YUP');
      this.theimage.nativeElement.height = this.parameters.height;
      console.log('what does it eqaul', this.theimage.nativeElement.height);
    }
    if (this.parameters.width) {
      this.theimage.nativeElement.width = this.parameters.width;
    }
    // this.areamap.scalingFactor = this.getScalingFactor();
  }

  sendMessage(message: Message) {
    console.log('message received in pic! is', message);
    // todo Response val as in the one inside Params and choice made (perhaps change Response to Choice to make
    // it clear the level it's from)
    this.responseEvent.emit(message);
    // todo support multiple reponses in future
    this.done();
  }

  validate() {
    return true;
  }

  done() {
    this.doneEvent.emit(null);
  }

  getScalingFactor() {
    const width = this.theimage.nativeElement.width;
    const nwidth = this.theimage.nativeElement.naturalWidth;
    const height = this.theimage.nativeElement.height;
    const nheight = this.theimage.nativeElement.naturalHeight;
    console.log(width, height, nwidth, nheight);

    // TODO ^ make sure I didn't get width/nwidth flipped!
    // const scalingFactor = Math.min(width / nwidth, height / nheight);
    const scalingFactor = width / nwidth;
    console.log('factor ', scalingFactor);
    return scalingFactor;
  }
}
