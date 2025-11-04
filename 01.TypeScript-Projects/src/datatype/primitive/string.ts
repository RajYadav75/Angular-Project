var  link:string  = "<a href='home.html'>Home</a>";
var link:string  = '<a href="home.html">Home</a>';

var username:string = "Raj";
var age:number = 23;
var msg1:string = "Hello !" + " " + username + " " + "you will be" + " " + (age+1) + " " + "next year";
var msg2:string = `Hello ! ${username} you will be ${age+1} next year`;
console.log(msg1);
console.log(msg2);
document.write(`${msg1} <br> ${msg2}`);