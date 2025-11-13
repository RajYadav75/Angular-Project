class Database{
    constructor(dbName:string){
        console.log(`Connected with ${dbName} Database`);
    }
    public Insert(){
        console.log("Record Inserted");
    }

    public Delete(){
        console.log("Record Deleted");
    }
}

let ins = new Database("oracle");
ins.Insert();