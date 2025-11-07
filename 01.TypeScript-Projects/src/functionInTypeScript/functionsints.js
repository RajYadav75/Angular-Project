// function Name(param: type): type
// {
// }
function Hello(username) {
    return "Hello ! ".concat(username);
}
function Welcome() {
    console.log("Welcome to Typescript");
}
console.log(Hello("Raj Yadav"));
Welcome();
function Addition(number1, number2) {
    return " Addition of two number is :: ".concat(number1 + number2);
}
console.log(Addition(33, 43));
function Details(Name, Price) {
    if (Price) {
        console.log("Name=".concat(Name, "\nPrice=").concat(Price));
    }
    else {
        console.log("Name=".concat(Name));
    }
}
Details("Maggie", 20);
Details("Pulse");
