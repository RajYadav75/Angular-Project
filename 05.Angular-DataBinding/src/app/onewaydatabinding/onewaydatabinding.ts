import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaydatabinding',
  standalone: false,
  templateUrl: './onewaydatabinding.html',
  styleUrl: './onewaydatabinding.css',
})
export class Onewaydatabinding {
  public username:string  = "Raj Yadav"

  public stock:boolean = true;
  /*var table = document.createElement("table");
  table.width = "300";
  table.height ="200";       // error : height is not a property*/

  public tWidth:number = 300;
  public tHeight:number = 200;


}
