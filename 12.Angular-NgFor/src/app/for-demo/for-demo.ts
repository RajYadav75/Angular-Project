import { Component } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  standalone: false,
  templateUrl: './for-demo.html',
  styleUrl: './for-demo.css',
})
export class ForDemo
{
  public Menu: { Category: string, Products: string[] }[] = [
    {
      Category: "Electronics",
      Products: ["Televisions", "Mobiles"]
    },
    {
      Category: "Footwear",
      Products: ["Sneakers", "Boots", "Casuals"]
    }
  ];
  public Products: { Name: string, Price: number }[] = [
    { Name: "Samsung TV", Price: 45000.44 },
    { Name: "Mobile", Price: 20000.44 },
    { Name: "Nike Casuals", Price: 5300.34 }
  ];
}
