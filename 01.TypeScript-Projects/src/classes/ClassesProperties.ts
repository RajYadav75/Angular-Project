var username:string|null = prompt("Enter your Name");
var role:string|null = prompt("Enter your Role","admin|manager|customer");
var productName:string|null = prompt("Enter Product Name ");


class  Product{
    public  _productName:string|null = null;

    getProductName(){
        return this._productName;
    }

    setProductName(newName:string|null){
        if(role == "admin"){
            this._productName = newName;
        }else{
            document.write(`Hello ! ${newName} your role ${role} is not authorized to set product name.`);
        }
    }
}

let iphone = new Product();
iphone._productName = productName;
if (iphone._productName) {
    document.write("Product Name :: "+iphone._productName);
}