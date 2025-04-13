import { Component } from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-numberpipes',
  imports: [
    DecimalPipe
  ],
  templateUrl: './numberpipes.component.html',
  styleUrl: './numberpipes.component.css'
})
export class NumberpipesComponent {
  var_number:number=1000.8744401;
  var_number2:number=900000;
}
