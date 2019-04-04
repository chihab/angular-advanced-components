import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { TimerModule } from './00/timer.module';
// import { TimerModule } from './01/timer.module';
import { TimerModule } from './02/timer.module';
// import { TimerModule } from './03/timer.module';
// import { TimerModule } from './04/timer.module';

@NgModule({
  imports: [BrowserModule, TimerModule],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
