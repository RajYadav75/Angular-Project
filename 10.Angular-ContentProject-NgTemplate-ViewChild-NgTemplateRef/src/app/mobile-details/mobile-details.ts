import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-details',
  standalone: false,
  templateUrl: './mobile-details.html',
  styleUrl: './mobile-details.css',
})
export class MobileDetails implements OnInit{
  ngOnInit(): void
  {
    this.ThenBlock = this.viewOne;
  }

  constructor(){}

  public ThenBlock:TemplateRef<any>|null = null;

  @ViewChild("View1",{static:true})
  public viewOne:TemplateRef<any>|null = null;

  @ViewChild("View2",{static:true})
  public viewTwo:TemplateRef<any>|null = null;

  @ViewChild("View3",{static:true})
  public viewThree:TemplateRef<any>|null = null;

  @ViewChild("View4",{static:true})
  public viewFour:TemplateRef<any>|null = null;

  @ViewChild("View5",{static:true})
  public viewFive:TemplateRef<any>|null = null;

  public changeView(viewName: string){
    switch(viewName){
      case "View1":
        this.ThenBlock = this.viewOne;
        break;
      case "View2":
        this.ThenBlock = this.viewTwo;
        break;
      case "View3":
        this.ThenBlock = this.viewThree;
        break;
      case "View4":
        this.ThenBlock = this.viewFour;
        break;
      case "View5":
        this.ThenBlock = this.viewFive;
        break;
      
    }
  }
}
