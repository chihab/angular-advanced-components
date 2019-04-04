import { Component } from '@angular/core';
import { TimerDirective } from '../timer/timer.directive';

@Component({
  selector: 'app-timer-toggle',
  templateUrl: './timer-toggle.component.html',
  styleUrls: ['./timer-toggle.component.css']
})
export class TimerToggleComponent {

  constructor(private timer: TimerDirective) {
  }

}
