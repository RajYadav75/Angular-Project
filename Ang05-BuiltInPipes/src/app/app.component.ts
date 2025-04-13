import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FriendsComponent} from './friends/friends.component';
import {LowercasepipeComponent} from './lowercasepipe/lowercasepipe.component';
import {UppercasepipeComponent} from './uppercasepipe/uppercasepipe.component';
import {NumberpipesComponent} from './numberpipes/numberpipes.component';
import {CurrencypipesComponent} from './currencypipes/currencypipes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FriendsComponent, LowercasepipeComponent, UppercasepipeComponent, NumberpipesComponent, CurrencypipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ang05-BuiltInPipes';
}
