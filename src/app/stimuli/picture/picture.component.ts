import { Component, OnInit, Input } from '@angular/core';
import { Stimuli, Parameters } from '../stimuli';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements Stimuli {
  type = 'picture';
  @Input() parameters: any;

  constructor() {
    this.type = 'picture'; // ugh
  }

  // ngOnInit() {
  // }

}
