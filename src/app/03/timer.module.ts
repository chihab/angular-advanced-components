import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TimerToggleComponent } from './timer-toggle/timer-toggle.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { MainComponent } from './main/main.component';
import { TimerDirective } from './timer/timer.directive';
import { TimerFromDirective } from './timer/timer-from.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forChild([
    { path: '03', component: MainComponent }
  ])],
  declarations: [
    TimerDirective,
    TimerFromDirective,
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
