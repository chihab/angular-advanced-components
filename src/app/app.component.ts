import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <ul>
      <li><a href="" routerLink="00">Input Outputs</a></li>
      <li><a href="" routerLink="01">Compound components</a></li>
      <li><a href="" routerLink="02">Parent Component injection</a></li>
      <li><a href="" routerLink="03">Directive Injection</a></li>
      <li><a href="" routerLink="04">Render Prop</a></li>
    </ul>
  </div>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
