import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    TimerComponent,
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class TimerModule {
}
