import { Component, Input } from '@angular/core';
import { TimerDirective } from '../timer/timer.directive';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css']
})
export class TimerDisplayComponent {

  @Input() value: number;

  constructor(public timer: TimerDirective) {
  }


}
