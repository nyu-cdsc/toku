import { Component, OnInit } from '@angular/core';
import { STIMULI } from './default-stimuli';

@Component({
  selector: 'app-stimuli',
  templateUrl: './stimuli.component.html',
  styleUrls: ['./stimuli.component.css']
})
export class StimuliComponent {

  stimuli = STIMULI; 
  vid = 0;
  currentStimuli = 0;
  showPicture = false;
  currentVideo = this.getCurrent();

  // currentImage = this.stimuli[0].picture[0];

  videoEnded(){
    this.vid = this.vid + 1;
    this.showPicture = true;
    console.log("this.vid =", this.vid);
    console.log(this.getCurrent());

    this.currentVideo = this.getCurrent();
    // this.currentImage = this.stimuli[1].picture[0]
  }

  getCurrent(){
    console.log(this);
    console.log(this.stimuli);
    if(this.vid > this.stimuli[this.currentStimuli].movie.length - 1){
      if(this.currentStimuli == this.stimuli.length - 1){
        return this.currentVideo;
      }
      this.currentStimuli++;
      this.vid = 0;
    }
    return this.stimuli[this.currentStimuli].movie[this.vid];
  }

}
