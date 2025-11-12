interface Product{
    readonly name:string;
    price:number;
}

let product : Product= {
    name:"Baby Dolls",
    price:400
}
console.log(`${product.name} ${product.price}`);

product.name= "Barbie Doll";// Cannot assign to 'name' because it is a read-only property
console.log(`${product.name} ${product.price}`);