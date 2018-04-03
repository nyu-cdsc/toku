import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartPageComponent {
  gameStarted = false; 

  startGame(){
    this.gameStarted = true; 
  }

}
