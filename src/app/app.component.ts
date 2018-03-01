import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first ng app';

  vid = 0; 

  videoEnded(event){
  this.vid = 1;
  console.log("videoEnded in Parent was called");
  }
}
