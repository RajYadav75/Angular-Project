var ProductId = Symbol();

let product = {
    [ProductId] : 1,
    Name : "Raj Yadav",
    Price : 40000.00
}

for(var property in product){
    console.log(property);
}
console.log("Product Id ="+ product[ProductId])