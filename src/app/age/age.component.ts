import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent {
  @Output() year = new EventEmitter<number>();

  audio = 0; 

  constructor() { }

  setAge(number) {
    this.year.emit(number);
    console.log("setAge was called", this.year)
  }

  audioEnded(value){
    this.audio = value

  }
}
