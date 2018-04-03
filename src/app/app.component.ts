import { ViewChild, Component } from '@angular/core';
import { AgeComponent } from './age/age.component';
import { StartPageComponent } from './startpage/startpage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(AgeComponent) currentAgeComponent: AgeComponent
  @ViewChild(StartPageComponent) currentStartPageComponent: StartPageComponent

  startOver(){
    this.currentAgeComponent.year = 0;
    this.currentStartPageComponent.gameStarted = false; 
    console.log(this.currentAgeComponent)
  }
}