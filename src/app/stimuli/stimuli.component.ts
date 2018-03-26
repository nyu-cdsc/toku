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
  aud = 0;
  pic = 0; 
  currentStimuli = 0;
  showPicture = false;

  // for getCurrentVideo and getCurrentAudio's use
  currentVideo: string;
  currentAudio: string; 
  currentImage: string;

  videoEnded(){
    let result = this.nextVideo();
    if (!result) {
      this.showPicture = true;
    }
  }

  nextVideo(){
     if (this.vid == this.stimuli[this.currentStimuli].movie.length - 1){
      return false;
    }

    this.vid++;
    return true;
  }

  getCurrentVideo(){
    let video = this.stimuli[this.currentStimuli].movie[this.vid];
    if (video != this.currentVideo) {
      this.currentVideo = video;
    }

    return video;
  }

  audioEnded(){
    // let result = this.nextVideo();
    // if (!result) {
    //   this.showPicture = true;
    // }
  }

  getCurrentAudio(){
    let audio = this.stimuli[this.currentStimuli].sound[this.aud];
    if (audio != this.currentAudio) {
      this.currentAudio = audio;
    }

    return audio;
  }

  getCurrentImage(){
    let image = this.stimuli[this.currentStimuli].picture[this.pic];
    if (image != this.currentImage) {
      this.currentImage = image;
    }

    return image;
  }

  nextStimuli(){
    this.currentStimuli++;
    this.vid = 0;
  }


} 