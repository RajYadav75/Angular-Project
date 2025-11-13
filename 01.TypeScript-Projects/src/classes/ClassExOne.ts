var categoryName:string = "Electronics";

var Demo = class {};

if (categoryName == "Electronics") {
    Demo = class {
        ProductName = "Iphone 15";
        ProductPrice:number = 45000;
    };
}else{
    Demo = class {
        EmployeeName:string = "Ankita Tiwari";
        EmployeeSalary:number = 55000;
    }
}
