import { ViewChild, Component } from '@angular/core';
import { StimuliComponent } from './stimuli/stimuli.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  @ViewChild(StimuliComponent) currentStimuliComponent: StimuliComponent

  gameStarted = false; 
  age = 0; 

  itsOver = false;
  //this.currentStimuliComponent.itsOver;

  startGame(cond) {
    this.gameStarted = cond; 
  }

  setAge(value){
    this.age = value; 
    console.log(this.age, "is the age of the kid")
  }

  startOver(){
    this.age = 0;
    this.gameStarted = false; 
  }
}