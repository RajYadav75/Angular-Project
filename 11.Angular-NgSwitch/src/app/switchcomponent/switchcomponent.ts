import { Component } from '@angular/core';

@Component({
  selector: 'app-switchcomponent',
  standalone: false,
  templateUrl: './switchcomponent.html',
  styleUrl: './switchcomponent.css',
})
export class Switchcomponent {
  public ViewName:string = "BasicDetails";

  public ViewClick(viewname:string){
    this.ViewName = viewname;
  }
}
