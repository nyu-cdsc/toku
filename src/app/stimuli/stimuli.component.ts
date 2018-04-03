import { Component, EventEmitter, Output } from '@angular/core';
import { STUDIES, ATTENTIONCHECK } from './default-stimuli';
import { Study, Condition, Trial, AttnCheck, Coordinate } from './stimuli'; 
import { ResponseService } from '../response/response.service';
import { Response } from '../response/response';

@Component({
  selector: 'app-stimuli',
  templateUrl: './stimuli.component.html',
  styleUrls: ['./stimuli.component.css']
})
export class StimuliComponent {
  @Output() numberOfTrialsEvent = new EventEmitter<number>();

  allStudies: Study[] = STUDIES;
  // the single study to be run
  study: Study;
  // the single condition to be run
  condition: Condition;
  // the current trial - this will be updated throughout the session
  trial: Trial; 
  attnCheck: AttnCheck;
  attnSound: string = "";
 
  vid = 0;
  aud = 0;
  pic = 0; 
  showPicture = false;
  introEnded = false; 
  playAltAudio = false; 
  chosenValue = null; 
  attnCheckTrial = false; 
  firstTrial: Trial; 
  responseService: ResponseService;
  response: Response; 
  attnAnimalSound = false;
  attnSoundOver = false; 
  playSecondAudio = false; 
  numberOfTrials = 0; 

  // for getCurrentVideo() and getCurrentAudio()
  currentVideo: string;
  currentAudio: string; 
  currentImage: string;
  currentImageCoordinates: Coordinate[];
  currentAttnSound: string; 

  // initialize: choose the study, condition, and first trial
  constructor( responseService: ResponseService ){
    this.responseService = responseService;
    this.setStudy();
    this.setCondition();
    this.setTrial();
    this.firstTrial = this.trial;
    if (this.study.id == 3){
      this.playAltAudio = true;
      console.log(this.playAltAudio)
    }

    if (this.study.id != 3){
      this.introEnded = true;
      console.log(this.introEnded)
    }
  }

  // set one study at random from list
  setStudy() {
    if(typeof this.study !== 'undefined'){ // guard
      return; // study already set- one per session
    }
    this.study = this.allStudies[Math.floor(Math.random() * this.allStudies.length)];
    // this.study = this.allStudies[1] //GET RID OF THIS
  }

  setCondition() {
    if(typeof this.condition !== 'undefined'){
      return; // condition already set- one per session
    }
    this.condition = this.study.conditions[Math.floor(Math.random() * this.study.conditions.length)];
  }

  videoEnded(alt){
    if (alt) {
      this.introEnded = true;
      console.log(this.introEnded, "if the video ended properly after alt intro")
    }

    let result = this.nextVideo();
    if (!result && !alt) {
      this.showPicture = true;
    }
  }

  // return location of current trial in conditions' list of trials
  getTrialIndexById(id):number {
    let result: number;

    this.study.conditions.forEach(cond => {
      cond.trials.forEach((trial, index) => {
        if (trial.id == id){
          result = index; 
        }
      });
    });

    return result;
  }

  setTrial() {
    let length = this.condition.trials.length;
    this.trial = this.condition.trials[Math.floor(Math.random() * length)];
  }

  nextVideo():boolean{
     if (this.vid == this.trial.movie.length - 1){
      return false;
    }

    this.vid++;
    return true;
  }

  getCurrentVideo(){
    console.log("before", this.currentVideo)
    console.log("showPicture", this.showPicture)
    let video = this.trial.movie[this.vid];
    if (video != this.currentVideo) {
      // keep them in sync
      this.currentVideo = video;
    }
    console.log("after", this.currentVideo)
    return video;
  }

  audioEnded(alt){
    if (alt) {
      this.playAltAudio = false;
    }
  }

  getCurrentAudio(audioType){

    console.log(this.study.id);
    let audio = this.trial.sound[this.aud];
    
    if (audioType == 0) {
      audio = this.trial.sound1[this.aud];
    }

    if (audioType == 2){
      audio = this.trial.sound[this.aud + 1];
    }

    if (audio != this.currentAudio) {
      this.currentAudio = audio;
    }

    return audio;
  }

  nextAudio():boolean{
    if (this.aud == this.trial.sound.length - 1){
     return false;
   }

   this.aud++;
   return true;
 }

  getCurrentImage(){
    let image = this.trial.picture.picture[this.pic];
    if (image != this.currentImage) {
      this.currentImage = image;
    }

    return image;
  }

  getCurrentImageCoordinates(){
    let coords = this.trial.picture.coordinate;

    if(coords != this.currentImageCoordinates){
      this.currentImageCoordinates = this.trial.picture.coordinate;
    }

    return coords;
  }

  getAttnAudio(){
    if (this.attnSound != ""){
      return this.attnSound;
    } 

    this.attnSound = ATTENTIONCHECK.sound[Math.floor(Math.random() * ATTENTIONCHECK.sound.length)];
    console.log(this.attnSound, "this is the animal sound")
    return this.attnSound;
  }

  attnAudioEnded(attnSoundDone){
    this.attnAnimalSound = true;

    if (attnSoundDone){
      this.attnSoundOver = true;
    }
  }

  getCssCoordinates(coords) {
    let res = coords.split(",");
    res = res.map((val) => {
      val = val - 80; // todo make the box size set somewhere and use that var
      if(val < 0){
        val = 0;
      }
      return val+"px";
    })
    return res;
  }

  blockedCoordinates() {
    if(this.currentImageCoordinates){
      return this.currentImageCoordinates.filter((value) => {
        return value.disabled; // send back only the disabled coordinate areas
      })
    }

    return null;
  }

  nextAttnCheck(value, oneMoreAudio){
    console.log('nextAttn, received as value: ', value);

    if(this.response) {
      this.response.response.push(value+1);
    }
    this.response = {
      response: [value + 1], // ngfor indexes by 0
      age: -1, //todo fill in
      id: "", // todo generate
      study: this.study.id,
      condition: this.condition.id,
      trial: this.trial.id,
      attnTrial: this.attnSound,
      attnResponse: -1,
    };
    this.currentImageCoordinates[value].disabled = true;
    // TODO need age, input from age component
    // TODO add rfunctionality so that for only study 2, it logs data for first audio 
    if(oneMoreAudio == true && this.study.id == 2){
      this.playSecondAudio = true; 
      console.log(this.playSecondAudio, "playSecondAudio is set to this")
    } else {
      this.attnCheckTrial = true; 
    }
  }

  trialsCompleted(){
    this.numberOfTrials++;
    this.numberOfTrialsEvent.emit(this.numberOfTrials);
  }

  // todo split into two functions - juggling too much
  // stores value sent to it by image (click)
  // removes finished trial from list, for next selection
  nextTrial(value){
    this.trialsCompleted()
    console.log("at beginning of next trial()")
    this.response.attnResponse = value + 1; // ngfor indexes by 0
    
    // need to get index of the current trial within the conditions' list
    let index = this.getTrialIndexById(this.trial.id)
    this.condition.trials.splice(index, 1);

    console.log("after getTrialIndexbyID in next trial()")

    this.setTrial();

    console.log("after setTrial() of next trial()")
    this.vid = 0;
    this.aud = 0;
    this.pic = 0; 
    this.showPicture = false;
    this.attnCheckTrial = false; 
    this.attnAnimalSound = false;
    this.attnSoundOver = false; 
    this.playSecondAudio = false;
    this.attnSound = ""; 
    
    console.log("after resetting lots of things in next trial()")
    
    this.responseService.setResponse(this.response);
    this.response = null;

    if (this.study.id == 3){
      this.playAltAudio = true;
    }
    
    console.log("at end of next trial()")
    console.log(this.introEnded, "what introEnded is set at ");
    console.log("showPicture =", this.showPicture);
    console.log("playAltAudio =", this.playAltAudio);
    console.log("trial =", this.trial);

  }

} 