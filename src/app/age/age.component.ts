import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  year: year;

  constructor() { }

  ngOnInit() { 
  }

  setAge(year: number) {
  this.year = year
  console.log("setAge was called", year, this.year)
    }
}
