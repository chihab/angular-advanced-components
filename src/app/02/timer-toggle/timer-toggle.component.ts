import { Component } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-timer-toggle',
  templateUrl: './timer-toggle.component.html',
  styleUrls: ['./timer-toggle.component.css']
})
export class TimerToggleComponent {

  constructor(private timer: TimerComponent) {
  }

}
