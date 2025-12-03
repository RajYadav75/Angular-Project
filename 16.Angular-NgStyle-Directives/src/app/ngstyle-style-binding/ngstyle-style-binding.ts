import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle-style-binding',
  standalone: false,
  templateUrl: './ngstyle-style-binding.html',
  styleUrl: './ngstyle-style-binding.css',
})
export class NgstyleStyleBinding
{
  public bgStyle: string = 'red';
  public textStyle: string = 'white';
  public padding: string = "0px";
  public fontSize: string = "0px";

  public styleObject: { 'background-color': string, 'color': string, 'padding': string, 'font-size': string } = {
    "background-color": "red",
    "color": "white",
    "padding": "10px",
    "font-size": "10px",
  }
  public ApplyClick()
  {
    this.styleObject = {
      "background-color": this.bgStyle,
      "color": this.textStyle,
      "padding": this.padding + "px",
      "font-size": this.fontSize + "px"
    }
  }
  public FontChange()
  {
    this.styleObject = {
      "background-color": this.bgStyle,
      "color": this.textStyle,
      "padding": this.padding + "px",
      "font-size": this.fontSize + "px"
    }
  }

}
