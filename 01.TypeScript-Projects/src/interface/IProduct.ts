interface IProduct{
    name:string;
    price:number;
    stock:boolean;
}


let product: IProduct = {
    name: "Raj Yadav",
    price: 20000,
    stock: true
}

console.log(`product name :: ${product.name}\n product price is :: ${product.price}\n product stock availability: ${product.stock}`)