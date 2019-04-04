import { Directive, Input, OnInit, Optional } from '@angular/core';
import { TimerDirective } from './timer.directive';

@Directive({
  selector: '[appTimerFrom]',
  exportAs: 'appTimerFrom'
})
export class TimerFromDirective implements OnInit {

  @Input() appTimerFrom: TimerFromDirective;

  constructor(@Optional() public timer: TimerDirective) {
  }

  ngOnInit() {
    if (this.appTimerFrom) {
      this.timer = this.appTimerFrom.timer;
    }
  }
}
