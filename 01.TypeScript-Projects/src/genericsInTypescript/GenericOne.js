var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.GetData = function (data) {
        for (var property in data) {
            console.log("".concat(property, " : ").concat(data[property]));
        }
    };
    return Service;
}());
var obj = new Service();
console.log("----Employee Details----");
obj.GetData({ FirstName: "John", Designation: "Manager", Salary: 50000 });
console.log("----Product Details-----");
obj.GetData({ Name: "TV", Price: 45000 });
