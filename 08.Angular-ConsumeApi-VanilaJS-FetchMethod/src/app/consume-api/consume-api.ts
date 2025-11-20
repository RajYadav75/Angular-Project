import {Component, OnInit} from '@angular/core';
import {FakeStoreProductContract} from './FakeStoreProductContract';

@Component({
  selector: 'app-consume-api',
  standalone: false,
  templateUrl: './consume-api.html',
  styleUrl: './consume-api.css',
})
export class ConsumeApi implements OnInit {

  ngOnInit(): void {
    this.LoadProduct(1);
  }

  constructor() {
  }

  public product: FakeStoreProductContract = {
    category: '', description: '', id: 0, image: '', price: 0, rating: {count: 0, rate: 0}, title: ''
  }

  public LoadProduct(id:number){
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => this.product = data)
      .catch(error => {
        console.error('Error fetching product:', error);
      })
  }

  public Count:number = 1;

  public PreviousClick():void {
    this.Count--;
    this.LoadProduct(this.Count);
  }

  public NextClick():void {
    this.Count++;
    this.LoadProduct(this.Count);
  }
}
