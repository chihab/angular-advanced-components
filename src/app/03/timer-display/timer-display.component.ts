import { Component, Input, OnInit } from '@angular/core';
import { TimerDirective } from '../timer/timer.directive';
import { TimerFromDirective } from '../timer/timer-from.directive';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css']
})
export class TimerDisplayComponent implements OnInit {
  timer: TimerDirective;

  constructor(public timerFrom: TimerFromDirective) {
  }

  ngOnInit(): void {
    this.timer = this.timerFrom.timer;
  }

}
