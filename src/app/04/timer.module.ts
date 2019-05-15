import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forChild([
    { path: '04', component: MainComponent }
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
