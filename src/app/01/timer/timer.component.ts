import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TimerDisplayComponent } from '../timer-display/timer-display.component';
import { TimerToggleComponent } from '../timer-toggle/timer-toggle.component';

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
export class TimerComponent implements AfterContentInit, OnInit {

  @ContentChild(TimerDisplayComponent)
  private displayComponent: TimerDisplayComponent;
  @ContentChild(TimerToggleComponent)
  private toggleComponent: TimerToggleComponent;
  private subscription: Subscription;

  @Input() init = 0;
  @Input() interval = 1000;

  value: number;
  isPaused = true;

  ngOnInit() {
    this.stop();
  }

  ngAfterContentInit() {
    this.updateContent();
    this.toggleComponent.started.subscribe(() => {
      this.start();
      this.updateContent();
    });
    this.toggleComponent.paused.subscribe(() => {
      this.pause();
      this.updateContent();
    });
    this.toggleComponent.stopped.subscribe(() => {
      this.stop();
      this.updateContent();
    });
  }

  updateContent() {
    this.displayComponent.value = this.value;
    this.toggleComponent.isPaused = this.isPaused;
    this.toggleComponent.isStoppable = this.isStoppable;
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
        this.updateContent();
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
