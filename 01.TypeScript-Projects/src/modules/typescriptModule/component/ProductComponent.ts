import {ProductTemplate} from "../template/ProductTemplate";
export class ProductComponent extends ProductTemplate
{
    Name = "Samsung TV";
    Price = 40000.33;
    Qty = 2;
    CategoryName = "Electronics";
    Total(){
        return this.Qty * this.Price;
    }
    Print(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`);
    }
}
