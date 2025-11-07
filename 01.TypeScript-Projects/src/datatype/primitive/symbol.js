var _a;
var ProductId = Symbol();
var product = (_a = {},
    _a[ProductId] = 1,
    _a.Name = "Raj Yadav",
    _a.Price = 40000.00,
    _a);
for (var property in product) {
    console.log(property);
}
console.log("Product Id =" + product[ProductId]);
