import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stimuli, Parameters } from '../stimuli';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent implements Stimuli, OnInit {
  @Input() parameters: Parameters;
  @Output() doneEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  validate() {
    return true;
  }

}

export class SoundParameters implements Parameters {
  disable: boolean; // for now..
  file: string;

  validate() { }
}
