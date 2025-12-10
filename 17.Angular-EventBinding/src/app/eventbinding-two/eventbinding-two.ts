import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding-two',
  standalone: false,
  templateUrl: './eventbinding-two.html',
  styleUrl: './eventbinding-two.css',
})
export class EventbindingTwo
{
  public imgSrc: string = "shoes.png";

  public styleObject: { position: string, left: string, top: string } = {
    position: '',
    left: '',
    top: ''
  };

  public setOtherShoes(colorName: string)
  {
    switch (colorName) {
      case "black":
        this.imgSrc = "shoes.jpg";
        break;
      case "green":
        this.imgSrc = "men-shoes.jpg";
        break;
      case "blue":
        this.imgSrc = "shoes1.png";
        break;
    }
  }
  public MouseMove(e: any)
  {
    this.styleObject = {
      position: 'fixed',
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    }
  }

}
