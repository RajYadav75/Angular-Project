import { Component, OnInit } from '@angular/core';
import { FakeStoreContracts } from './fakestoreContracts';

@Component({
  selector: 'app-fakestore',
  standalone: false,
  templateUrl: './fakestore.html',
  styleUrl: './fakestore.css',
})
export class Fakestore implements OnInit
{
  public product: FakeStoreContracts[] = [];
  constructor() { }

  ngOnInit(): void
  {
    fetch(`https://fakestoreapi.com/products/`)
      .then(res => res.json())
      .then(data => this.product = data);
  }

}
