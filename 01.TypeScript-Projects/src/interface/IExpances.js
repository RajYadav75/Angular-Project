var product = {
    Name: "Iphone 15",
    Price: 45000,
    Quantity: 50,
    Total: function () {
        return this.Price * this.Quantity;
    },
    Print: function () {
        console.log("Name = ".concat(this.Name, " \n Price = ").concat(this.Price, "\n Quantity = ").concat(this.Quantity, " \n Total is := ").concat(this.Total()));
    }
};
product.Print();
