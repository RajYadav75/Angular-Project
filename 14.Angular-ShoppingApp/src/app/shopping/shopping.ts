import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../contracts/FakestoreProductContract';

@Component({
  selector: 'app-shopping',
  standalone: false,
  templateUrl: './shopping.html',
  styleUrl: './shopping.css',
})
export class Shopping implements OnInit{
  constructor(){}

  public Categories:string[] = [];
  public Products:FakestoreProductContract[] = [];
  public CartItems:FakestoreProductContract[]= [];
  public CartItemsCount:number = 0;
  public isCartVisible:boolean =false;

  ngOnInit(): void
  {
    this.LoadCategory();
    this.LoadProducts(`https://fakestoreapi.com/products`);
    this.GetCartItemCount(); 
  }

  public LoadCategory():void{
    fetch(`https://fakestoreapi.com/products/categories`)
    .then(response => response.json())
    .then(data => {
      data.unshift("all");
      this.Categories = data;
    })
  }

  public LoadProducts(url:string):void{
    fetch(url)
    .then(response=>response.json())
    .then(data => {
      this.Products = data;
    })
  }

  public GetCartItemCount():void{
    this.CartItemsCount = this.CartItems.length;
  }


  public CategoryChange(categoryName:string):void{
    if(categoryName == "all"){
      this.LoadProducts(`https://fakestoreapi.com/products`);
    }else{
      this.LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`);
    }
  }


  public AddToCartClick(id:number):void{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      this.CartItems.push(data);
      this.GetCartItemCount();
      alert(`${data.title} \nAdded to Cart`)
    })
  }

  public ToggleCart():void{
    this.isCartVisible = (this.isCartVisible == false)?true:false;
  }

  public RemoveClick(index:number):void{
    var flag = confirm("Are you sure want to delete?");
    if(flag == true){
      this.CartItems.splice(index,1);
      this.GetCartItemCount();
    }
  }

}
