class Product {
    public  Name: string = "Samsung TV";
    public Rating: any = {
        CustomerRating:{
            Rate:3.4,
            Count:4600
        },
        VenderRating:{
            Rate:3.5,
            Count:3000
        }
    };
    get VenderRating(){
        return this.Rating.VenderRating.Rate;
    }
}

let tv = new Product();
console.log(` Vender Rating :: ${tv.VenderRating}`);