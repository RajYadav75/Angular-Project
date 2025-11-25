import { Component } from '@angular/core';

@Component({
  selector: 'app-ngforcomponent',
  standalone: false,
  templateUrl: './ngforcomponent.html',
  styleUrl: './ngforcomponent.css',
})
export class Ngforcomponent {
  public Categories:string[] = ["All", "Electronics", "Footwear", "Fashion"];
}
