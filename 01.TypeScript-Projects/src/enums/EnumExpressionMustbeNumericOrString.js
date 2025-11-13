var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["A"] = 10] = "A";
    ErrorCodes[ErrorCodes["B"] = 20] = "B";
    ErrorCodes[ErrorCodes["C"] = 30] = "C";
})(ErrorCodes || (ErrorCodes = {}));
console.log("Addition=".concat(ErrorCodes.C));
