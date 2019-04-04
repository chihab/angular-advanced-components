import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.css']
})
export class TimerDisplayComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}
