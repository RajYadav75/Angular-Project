var Product = /** @class */ (function () {
    function Product() {
        this.Name = "Samsung TV";
        this.Rating = {
            CustomerRating: {
                Rate: 3.4,
                Count: 4600
            },
            VenderRating: {
                Rate: 3.5,
                Count: 3000
            }
        };
    }
    Object.defineProperty(Product.prototype, "VenderRating", {
        get: function () {
            return this.Rating.VenderRating.Rate;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var tv = new Product();
console.log("Vender Rating :: ".concat(tv.VenderRating));
