import { ViewChild, Component, Input } from '@angular/core';
import { StimuliComponent } from './stimuli/stimuli.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(StimuliComponent) currentStimuliComponent: StimuliComponent
  // @Input() isResetting = false; 
  

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

  trialsCompleted(number){
    if (number == 4){
      this.itsOver = true;
    }
  }

  // onReset() {
  //   this.isResetting = true;
  //   this.age = 0;
  //   this.gameStarted = false; 
  //   this.itsOver = false; 
  //   this.currentStimuliComponent
  //   setTimeout(() => this.isResetting = false, 0);
  //   return false;
  // }
  
  startOver(){
    this.age = 0;
    this.gameStarted = false; 
    this.itsOver = false; 
  }

}