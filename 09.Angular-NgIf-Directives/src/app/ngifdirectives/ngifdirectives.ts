import { Component, OnInit } from '@angular/core';
import { Product } from './ProductContracts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngifdirectives',
  standalone: false,
  templateUrl: './ngifdirectives.html',
  styleUrl: './ngifdirectives.css',
})
export class Ngifdirectives implements OnInit{
  id:number = 1
NextClick() {
  this.id++;
  this.loadProduct(this.id);
}
PreviousClick() {
  this.id--;
  this.loadProduct(this.id);
}
  ngOnInit(): void {
    this.loadProduct(this.id);
  }
  constructor() {}
  public product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    },
  };


  public loadProduct(id:number): void {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        this.product = data;
      })
      .catch(error => {
        console.error('Error loading product:', error);
      });
  }
}