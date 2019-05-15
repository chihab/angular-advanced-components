import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forChild([
    { path: '00', component: MainComponent }
  ])],
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
