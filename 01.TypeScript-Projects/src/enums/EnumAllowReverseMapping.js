var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["NotFound"] = 404] = "NotFound";
})(ErrorCodes || (ErrorCodes = {}));
console.log("".concat(ErrorCodes.NotFound, ": ").concat(ErrorCodes[404]));
