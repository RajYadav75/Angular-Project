import { Component } from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-jsonpipes',
  imports: [
    CommonModule
  ],
  templateUrl: './jsonpipes.component.html',
  styleUrl: './jsonpipes.component.css'
})
export class JsonpipesComponent {

  jsondata:any = {
    id:1,
    name:"Raj",
    description:"Description",
    address:"Gorakhpur",
    heart:"Ankita"
  };
}
