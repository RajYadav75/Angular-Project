import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-datepipes',
  imports: [CommonModule],
  templateUrl: './datepipes.component.html',
  styleUrl: './datepipes.component.css'
})
export class DatepipesComponent {

  date:Date = new Date();
}
