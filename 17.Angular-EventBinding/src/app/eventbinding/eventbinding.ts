import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  standalone: false,
  templateUrl: './eventbinding.html',
  styleUrl: './eventbinding.css',
})
export class Eventbinding {


  public InsertClick(...e:any):void{
    document.write(`
      Button Id: ${e.target.id} <br>
      Button Name: ${e.target.name} <br>
      Button ClassName: ${e.target.className} <br>
      Button X Position: ${e.clientX} <br>
      Button CTRL Key: ${e.ctrlKey}  
    `);
  }

}
