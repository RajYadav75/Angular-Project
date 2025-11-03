function Shadowing() {
    var x = 10;
    if (x == 10) {
        var y = 20;
        var y = 30; // This is shadowing
    }
    console.log("X " + x + "\n" + "Y " + y);
}
Shadowing();
