// Let
// - It configure block scope variable.
// - It is accessible in the block where it is defined and also to its inner blocks.
// - It allows declaring, assignment, initialization
// - It will not allow shadowing and hoisting.
function Let(){
    let x ;
    x = 10;
    if(x == 10){
        let y = 20;
        console.log("X "+x +"\n"+"Y "+y);
    }
}
Let();