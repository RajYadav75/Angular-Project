import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contentprojection',
  standalone: false,
  templateUrl: './contentprojection.html',
  styleUrl: './contentprojection.css',
})
export class Contentprojection implements OnInit{
  public ngOnInit(): void {
    this.ThenBlock = this.Template1;
  }

  @ViewChild('Template1',{static: true}) public Template1: TemplateRef<any> | null = null;
  @ViewChild('Template2',{static: true}) public Template2: TemplateRef<any> | null = null;
  @ViewChild('Template3',{static: true}) public Template3: TemplateRef<any> | null = null;


  public ThenBlock: TemplateRef<any> | null = null;
  public TemplateName:string = `choose template`;


  public TemplateChange():void{
    switch(this.TemplateName){
      case "Template1":
        this.ThenBlock = this.Template1;
        break;
      case "Template2":
        this.ThenBlock = this.Template2;
        break;
      case "Template3":
        this.ThenBlock = this.Template3;
        break;
      default:
        this.ThenBlock = null;
    }
  }

}
