import { Component } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-currencypipes',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './currencypipes.component.html',
  styleUrl: './currencypipes.component.css'
})
export class CurrencypipesComponent {
  rajCurrency:number=99;
}
