var Database = /** @class */ (function () {
    function Database() {
        this.ConnectionString = null;
    }
    Database.prototype.Connect = function () {
        for (var property in this.ConnectionString) {
            console.log("".concat(property, " : ").concat(this.ConnectionString[property]));
        }
    };
    return Database;
}());
console.log("------Oracle Connection---------");
var oracle = new Database();
oracle.ConnectionString = {
    UserName: "scott",
    Password: "tiger",
    Database: "studentsDb"
};
oracle.Connect();
console.log("------MySql Connection---------");
var mysql = new Database();
mysql.ConnectionString = {
    Host: "localhost",
    User: "root",
    Pwd: "12345",
    Db: "EmpDb"
};
mysql.Connect();
console.log("------MongoDB Connection--------");
var mongo = new Database();
mongo.ConnectionString = {
    Url: "mongodb://127.0.0.1:27017"
};
mongo.Connect();
