import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FriendsComponent} from './friends/friends.component';
import {LowercasepipeComponent} from './lowercasepipe/lowercasepipe.component';
import {UppercasepipeComponent} from './uppercasepipe/uppercasepipe.component';
import {NumberpipesComponent} from './numberpipes/numberpipes.component';
import {CurrencypipesComponent} from './currencypipes/currencypipes.component';
import {DatepipesComponent} from './datepipes/datepipes.component';
import {JsonpipesComponent} from './jsonpipes/jsonpipes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FriendsComponent, LowercasepipeComponent, UppercasepipeComponent, NumberpipesComponent, CurrencypipesComponent, DatepipesComponent, JsonpipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ang05-BuiltInPipes';
}
