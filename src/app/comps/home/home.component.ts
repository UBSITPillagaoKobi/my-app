import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courseCode: string = 'APPDEV1';
  description: string = 'Angular is a powerful and widely-used open-source web application framework developed and maintained by Google. It allows developers to build dynamic, single-page web applications (SPAs) with a rich user experience. Angular uses TypeScript, a superset of JavaScript, for better development tools, type-checking, and enhanced maintainability.';
  units: number= 3;
  isActive: boolean = true
  stat: string='active';
  welcomemsg: string = 'Yow';

}
