import { Component } from '@angular/core';
import {ProductContract} from './ProductContract';


@Component({
  selector: 'app-mvc',
  standalone: false,
  templateUrl: './mvc.html',
  styleUrl: './mvc.css',
})
export class Mvc {
  // public UserName:string = "Ankita";

  public Product:ProductContract={
    Name: '', Price: 0, ShippedTo: '', Stock: false
  }

  public UpdatedProduct:ProductContract={
    Name: '', Price: 0, ShippedTo: '', Stock: false
  }

  RegisterClick(){
    this.UpdatedProduct = this.Product;
  }
}
