import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FriendsComponent} from './friends/friends.component';
import {LowercasepipeComponent} from './lowercasepipe/lowercasepipe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FriendsComponent, LowercasepipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ang05-BuiltInPipes';
}
