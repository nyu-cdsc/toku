import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Output() videoEndedEvent = new EventEmitter<number>();
  
  constructor() { }

  videoEnded() {
  console.log("videoEnded was called");
  this.videoEndedEvent.emit(1);
  }
}

