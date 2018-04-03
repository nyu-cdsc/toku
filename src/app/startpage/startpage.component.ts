import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartPageComponent {
  @Output() gameStarted = new EventEmitter<boolean>();

  startGame(){
    this.gameStarted.emit(true)
  }

}
