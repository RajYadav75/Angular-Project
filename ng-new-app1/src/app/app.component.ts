import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {GreetComponent} from './greet/greet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, GreetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-new-app1';
}
