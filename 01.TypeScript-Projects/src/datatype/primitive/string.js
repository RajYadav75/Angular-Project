var link = "<a href='home.html'>Home</a>";
var link = '<a href="home.html">Home</a>';
var username = "Raj";
var age = 23;
var msg1 = "Hello !" + " " + username + " " + "you will be" + " " + (age + 1) + " " + "next year";
var msg2 = "Hello ! ".concat(username, " you will be ").concat(age + 1, " next year");
console.log(msg1);
console.log(msg2);
document.write("".concat(msg1, " <br> ").concat(msg2));
