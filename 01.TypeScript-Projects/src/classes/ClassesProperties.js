var username = prompt("Enter your Name");
var role = prompt("Enter your Role", "admin|manager|customer");
var productName = prompt("Enter Product Name ");
var Product = /** @class */ (function () {
    function Product() {
        this._productName = null;
    }
    Product.prototype.getProductName = function () {
        return this._productName;
    };
    Product.prototype.setProductName = function (newName) {
        if (role == "admin") {
            this._productName = newName;
        }
        else {
            document.write("Hello ! ".concat(newName, " your role ").concat(role, " is not authorized to set product name."));
        }
    };
    return Product;
}());
var iphone = new Product();
iphone._productName = productName;
if (iphone._productName) {
    document.write("Product Name :: " + iphone._productName);
}
