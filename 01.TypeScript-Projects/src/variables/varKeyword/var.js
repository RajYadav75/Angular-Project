// Var
// - It defines a function scope variable.
// - You can declare in any block of a function and access from any another block.
// - It allows declaring, assignment and initialization.
// - It allows shadowing.
// - Shadowing is the process of re-declaring or re-initialization of any variable with in the scope.
// - It allows hoisting.
// - Hoisting allows the compiler to access variable declaration from any location.
//   There is no order for declaring and using.
function Scope() {
    var x;
    x = 10;
    if (x == 10) {
        var y = 20;
    }
    console.log("x " + x + "\n" + "y " + y);
}
Scope();
