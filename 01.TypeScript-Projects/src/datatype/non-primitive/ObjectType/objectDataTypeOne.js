var tv = {
    Name: "Samsung TV",
    Price: 45000.44,
    Qty: 2,
    Cities: ["Delhi", "Hyd"],
    Rating: { Rate: 4.3, Count: 600 },
    Total: function () {
        return this.Qty * this.Price;
    },
    Print: function () {
        console.log("\n          Name=".concat(this.Name, "\n\n          Price=").concat(this.Price, "\n\n          Qty=").concat(this.Qty, "\n\n          Total=").concat(this.Total(), "\n\n          Cities=").concat(this.Cities.toString(), "\n\n          Rating=").concat(this.Rating.Rate, " [").concat(this.Rating.Count, "]\n        "));
    }
};
tv.Print();
