import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VisitingCardComponent} from './visiting-card/visiting-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,VisitingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ang02-JSON';
}
