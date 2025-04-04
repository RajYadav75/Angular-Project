import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TrackPipeComponent} from './track-pipe/track-pipe.component';

@Component({
  selector: 'app-root',
  imports: [TrackPipeComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ang04-TrackByPipesInAngular';
}
