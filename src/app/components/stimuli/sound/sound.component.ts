import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stimuli } from '../stimuli';

@Component({
  selector: 'toku-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent implements Stimuli, OnInit {
  @Input() parameters: any;
  @Output() doneEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  validate() {
    return true;
  }

}
