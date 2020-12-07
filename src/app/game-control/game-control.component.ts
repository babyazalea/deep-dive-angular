import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() scoreFired = new EventEmitter<number>();

  score;
  lastScore = 0;

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.score = setInterval(() => {
      this.scoreFired.emit(this.lastScore + 1);
      this.lastScore++;
    }, 1000);
  }
  pauseGame() {
    clearInterval(this.score);
  }
}
