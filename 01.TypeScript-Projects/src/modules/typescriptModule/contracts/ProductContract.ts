export interface IProductContract
{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}
export default interface ICategory
{
    CategoryName:string;
}
