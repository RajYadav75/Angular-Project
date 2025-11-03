// const
// - It is also block scoped.
// - It allows only initialization. [no declaring and assigning]
// - It will not allow shadowing and hoisting.
function Const() {
    // const x ;//Show error
    var x = 10;
    console.log("x " + x);
}
Const();
