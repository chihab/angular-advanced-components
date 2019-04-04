import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-toggle',
  templateUrl: './timer-toggle.component.html',
  styleUrls: ['./timer-toggle.component.css']
})
export class TimerToggleComponent implements OnInit {

  @Input() isStoppable: boolean;
  @Input() isPaused: boolean;

  started: EventEmitter<any> = new EventEmitter();
  paused: EventEmitter<any> = new EventEmitter();
  stopped: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  start() {
    this.started.emit();
  }

  pause() {
    this.paused.emit();
  }

  stop() {
    this.stopped.emit();
  }

}
