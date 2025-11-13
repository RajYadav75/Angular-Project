var Database = /** @class */ (function () {
    function Database(dbName) {
        console.log("Connected with ".concat(dbName, " Database"));
    }
    Database.prototype.Insert = function () {
        console.log("Record Inserted");
    };
    Database.prototype.Delete = function () {
        console.log("Record Deleted");
    };
    return Database;
}());
var ins = new Database("oracle");
ins.Insert();
