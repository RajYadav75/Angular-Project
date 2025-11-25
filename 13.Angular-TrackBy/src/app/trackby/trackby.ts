import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby',
  standalone: false,
  templateUrl: './trackby.html',
  styleUrl: './trackby.css',
})
export class Trackby implements OnInit
{

  constructor(){

  }
  ngOnInit(): void
  {
    this.Product = this.Product;
  }


  public Product: any[] = [
    { Name: "Samsung TV", Price: 480000 },
    { Name: "Mobile", Price: 13400.44 },
    { Name: "Shoe", Price: 5000.33 }
  ]


  public updateClick()
  {
    alert("Item Update");
    this.Product = [
      { Name: "Samsung TV", Price: 480000 },
      { Name: "Mobile", Price: 13400.44 },
      { Name: "Shoe", Price: 5000.33 },
      { Name: "Bags", Price: 345 }
    ]
  }

  public TrackChanges(index:number){
    return index;
  }
}
