import { Component, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      font-size: 18px;
      background-color: #f1f1f1;
      padding: 10px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)
    }
  `]
})
export class TimerComponent implements OnInit {
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
