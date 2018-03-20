import { ViewChild, Component } from '@angular/core';
import { AgeComponent } from './age/age.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AgeComponent) currentAgeComponent: AgeComponent

  title = 'my first ng app';
  
  vid = 0; 
  nextvid = false;
  showCorgi = false;
  aud = false; 

  audioEnded(event){
    this.aud = true;
    console.log("audioEnded is now true!")
  }
  
  videoEnded(event){
  this.vid = 1;
  this.showCorgi = true;
  console.log("videoEnded in Parent was called");
  }

  saveAndNext(){
    if (this.aud = false) return;
    
    console.log("button to next movie worked (after first movie)");
    this.nextvid = true;
    this.showCorgi = false;
    this.aud = false; 
  }

  startOver(){
    this.vid = 0;
    this.nextvid = false;
    this.currentAgeComponent.year = 0;
    console.log(this.currentAgeComponent)
  }
}
