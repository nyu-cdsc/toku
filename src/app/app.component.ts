import { ViewChild, Component } from '@angular/core';
import { AgeComponent } from './age/age.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AgeComponent) currentAgeComponent: AgeComponent

  vid = 0; 
  nextvid = false;
  showCorgi = false;
  aud = false; 
  counter = 0; 

  audioEnded(event){
    this.aud = true;
    console.log("audioEnded is now true!")
  }
  
  videoEnded(event){
  this.vid = 1;
  this.showCorgi = true;
  console.log("videoEnded in Parent was called");
  }
  
  startOver(){
    this.vid = 0;
    this.nextvid = false;
    this.currentAgeComponent.year = 0;
    this.counter = 0; 
    console.log(this.currentAgeComponent)
  }

  saveAndNext(){
    if (!this.aud) return;
    
    console.log("button to next movie worked (after first movie)");
    if (this.counter > 3) {this.startOver()}
    else {
    this.nextvid = true;
    this.showCorgi = false;
    this.aud = false; 
    this.counter = this.counter + 1;
    console.log("audio was changed to false", this.aud, "and this counter is now", this.counter)
    }
  }

  nextSlide(){
    this.nextvid = (this.vid > 0)? true: false;
    this.showCorgi = true; 
    this.vid = 1;
  }
}
