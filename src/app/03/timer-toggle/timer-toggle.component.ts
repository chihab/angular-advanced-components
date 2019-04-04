import { Component, OnInit } from '@angular/core';
import { TimerDirective } from '../timer/timer.directive';
import { TimerFromDirective } from '../timer/timer-from.directive';

@Component({
  selector: 'app-timer-toggle',
  templateUrl: './timer-toggle.component.html',
  styleUrls: ['./timer-toggle.component.css']
})
export class TimerToggleComponent implements OnInit {

  timer: TimerDirective;

  constructor(public timerFrom: TimerFromDirective) {
  }

  ngOnInit(): void {
    this.timer = this.timerFrom.timer;
  }

}
