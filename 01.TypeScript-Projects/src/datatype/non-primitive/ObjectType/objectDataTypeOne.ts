let tv:{Name:string, Price:number, Qty:number, Cities:string[], Rating:{Rate:number, Count:number} , Total:any, Print?:any} = {
    Name: "Samsung TV",
    Price: 45000.44,
    Qty: 2,
    Cities: ["Delhi", "Hyd"],
    Rating: {Rate:4.3, Count:600},
    Total: function(){
        return this.Qty * this.Price;
    },
    Print: function(){
        console.log(`
          Name=${this.Name}\n
          Price=${this.Price}\n
          Qty=${this.Qty}\n
          Total=${this.Total()}\n
          Cities=${this.Cities.toString()}\n
          Rating=${this.Rating.Rate} [${this.Rating.Count}]
        `);
    }
}
tv.Print()
