import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { TimerToggleComponent } from './timer-toggle/timer-toggle.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forChild([
    { path: '01', component: MainComponent }
  ])],
  declarations: [
    TimerComponent,
    TimerToggleComponent,
    TimerDisplayComponent,
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class TimerModule {
}
