import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TimerModule as TimerModule0 } from './00/timer.module';
import { TimerModule as TimerModule1} from './01/timer.module';
import { TimerModule as TimerModule2 } from './02/timer.module';
import { TimerModule as TimerModule3 } from './03/timer.module';
import { TimerModule as TimerModule4 } from './04/timer.module';

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    BrowserModule, 
    TimerModule0,
    TimerModule1,
    TimerModule2,
    TimerModule3,
    TimerModule4
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
