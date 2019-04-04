import { Directive, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Directive({
  selector: '[appTimer]',
  exportAs: 'appTimerState'
})
export class TimerDirective implements OnInit {
  private subscription: Subscription;

  @Input() init = 0;
  @Input() interval = 1000;

  value: number;
  isPaused = true;

  ngOnInit() {
    this.stop();
  }

  start() {
    this.isPaused = false;
    this.startTimer();
  }

  pause() {
    this.isPaused = true;
    this.stopTimer();
  }

  stop() {
    this.isPaused = true;
    this.value = this.init;
    this.stopTimer();
  }

  startTimer() {
    this.subscription = interval(this.interval)
      .subscribe(_ => {
        this.value++;
      });
  }

  stopTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get isStoppable() {
    return this.init !== this.value;
  }

}
