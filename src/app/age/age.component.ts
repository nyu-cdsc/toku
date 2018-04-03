import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent {
  year = 0;

  constructor() { }

  setAge(number) {
    this.year = number;
    console.log("setAge was called", this.year)
  }
}
