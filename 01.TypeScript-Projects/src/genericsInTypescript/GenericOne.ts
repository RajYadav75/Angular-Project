/* todo:Method Generic Syntax
public Print<T>(a:T, b:T)
{
    console.log(`a=${a}\nb=${b}`);
}

Print<number>(10, 20);
Print<string>("A", "B");
*/
interface IProduct
{
    Name:string;
    Price:number;
}
interface IEmployee
{
    FirstName:string;
    Designation:string;
    Salary:number;
}
class Service
{
    public GetData<T>(data:T){
        for(var property in data){
            console.log(`${property} : ${data[property]}`);
        }
    }
}
let obj = new Service();
console.log(`----Employee Details----`);
obj.GetData<IEmployee>({FirstName:"John", Designation:"Manager", Salary: 50000});
console.log(`----Product Details-----`);
obj.GetData<IProduct>({Name: "TV", Price: 45000});
