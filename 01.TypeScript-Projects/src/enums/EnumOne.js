/* TODO:- Syntax
enum  Name
{
    ref = value
}
Name.ref;
*/
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["OK"] = 0] = "OK";
    ErrorCodes[ErrorCodes["Success"] = 201] = "Success";
    ErrorCodes[ErrorCodes["NotFound"] = 404] = "NotFound";
    ErrorCodes[ErrorCodes["InternalError"] = 405] = "InternalError";
})(ErrorCodes || (ErrorCodes = {}));
console.log("Status Code for Success : ".concat(ErrorCodes.Success));
console.log("Status Code for Success : ".concat(ErrorCodes.OK));
console.log("Status Code for Success : ".concat(ErrorCodes.NotFound));
console.log("Status Code for Success : ".concat(ErrorCodes.InternalError));
