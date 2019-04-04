import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: '<ng-container *ngTemplateOutlet="template; context: {value: value, isPaused: isPaused, start: start,  pause: pause}"></ng-container>'
})
export class TimerComponent implements OnInit {
  private subscription: Subscription;

  @Input() init = 0;
  @Input() interval = 1000;
  @ContentChild(TemplateRef) template: TemplateRef<any>;

  value: number;
  isPaused = true;

  ngOnInit() {
    this.value = this.init;
    this.start();
  }

  start = () => {
    this.isPaused = false;
    this.startTimer();
  }

  pause = () => {
    this.isPaused = true;
    this.stopTimer();
  }

  stop = () => {
    this.isPaused = true;
    this.value = this.init;
    this.stopTimer();
  }

  get isStoppable() {
    return this.init !== this.value;
  }

  private startTimer() {
    this.subscription = interval(this.interval)
      .subscribe(_ => {
        this.value++;
      });
  }

  private stopTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
