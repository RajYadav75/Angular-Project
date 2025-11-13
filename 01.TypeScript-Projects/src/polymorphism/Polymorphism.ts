class Employee
{
    public FirstName:string = "";
    public LastName:string = "";
    public Designation:string = "";
    public Print():void {
        document.write(`${this.FirstName} ${this.LastName} - ${this.Designation}<br>`);
    }
}
class Developer extends Employee
{
    FirstName = "Raj";
    LastName = "Yadav";
    Designation = "Developer";
    Role = "Developer Role : Build, Debug, Test, Deploy";
    Print(){
        super.Print();
        document.write(this.Role);
    }
}
class Admin extends Employee
{
    FirstName = "Ankita";
    LastName = "Tiwari";
    Designation = "Admin";
    Role = "Admin Role : Authorizations and Authentication";
    Print(){
        super.Print();
        document.write(this.Role);
    }
}
class Manager extends Employee
{
    FirstName = "Pallavi ";
    LastName = "Tripathi";
    Designation = "Manager";
    Role = "Manager Role : Approvals";
    Print(){
        super.Print();
        document.write(this.Role);
    }
}

let employees:Employee[] = [new Developer(), new Admin(), new Manager()];
