import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './comps/navi/navi.component';
import { LoginComponent } from './comps/login/login.component';
import { AboutsComponent } from './comps/abouts/abouts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[NaviComponent,RouterOutlet],
})
export class AppComponent {
  title = 'my-app';
}
