class StaticKeywordsInTypeScript{
    static name :string = "Raj";
    phno:number = 784521;
    constructor(){
        StaticKeywordsInTypeScript.name = StaticKeywordsInTypeScript.name+" Yadav";
        this.phno = this.phno + 10000;
    }

    Print():void{
        console.log(`name = ${StaticKeywordsInTypeScript.name} phone: ${this.phno}`);
    }
}

let objectOne = new StaticKeywordsInTypeScript();
objectOne.Print();
console.log(`====================================================`);
let objectTwo = new StaticKeywordsInTypeScript();
objectTwo.Print();