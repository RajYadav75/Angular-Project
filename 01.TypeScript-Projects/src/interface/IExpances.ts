interface IExpances {
    Name: string;
    Price: number;
    Quantity: number;

    Total(): number;

    Print?(): void;
}

let product: IExpances = {
    Name: "Iphone 15",
    Price: 45000,
    Quantity: 50,
    Total(): number {
        return this.Price*this.Quantity;
    },
    Print() {
        console.log(`Name = ${this.Name} \n Price = ${this.Price}\n Quantity = ${this.Quantity} \n Total is := ${this.Total()}`)
    }

}
product.Print();