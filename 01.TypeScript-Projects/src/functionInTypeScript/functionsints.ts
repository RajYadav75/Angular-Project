// function Name(param: type): type
// {

// }

function Hello(username:string):string{
    return `Hello ! ${username}`;
}


function Welcome():void{
    console.log(`Welcome to Typescript`);
    
}

console.log(Hello("Raj Yadav"));
Welcome();


function Addition(number1:number,number2:number){
    return ` Addition of two number is :: ${number1 + number2}`;
}
console.log(Addition(33,43));


function Details(Name:string,Price?:number){
    if(Price){
        console.log(`Name=${Name}\nPrice=${Price}`);
    }else{
        console.log(`Name=${Name}`);
    }
}
Details("Maggie",20);
Details("Pulse");