interface IOracle
{
    UserName:string;
    Password:string;
    Database:string;
}
interface IMySql
{
    Host:string;
    User:string;
    Pwd:string;
    Db:string;
}
interface IMongoDB
{
    Url:string;
}

class Database<T>
{
    public ConnectionString:T|null = null;
    public Connect():void{
        for(var property in this.ConnectionString) {
            console.log(`${property} : ${this.ConnectionString[property]}`);
        }
    }
}
console.log(`------Oracle Connection---------`);
let oracle = new Database<IOracle>();
oracle.ConnectionString = {
    UserName: "system",
    Password: "root",
    Database: "rajdb"
}
oracle.Connect();

console.log(`------MySql Connection---------`);
let mysql = new Database<IMySql>();
mysql.ConnectionString = {
    Host: "localhost",
    User: "root",
    Pwd: "root",
    Db: "RajDB"
}
mysql.Connect();

console.log(`------MongoDB Connection--------`);
let mongo = new Database<IMongoDB>();
mongo.ConnectionString = {
    Url: "mongodb://127.0.0.1:27017"
}
mongo.Connect();
