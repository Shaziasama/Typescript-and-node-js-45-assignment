function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love typescript"; }
    console.log(" creating the ".concat(size, "  shirt with the ").concat(printMessage, " print on shirt "));
}
//calling a function by defult values
make_shirt();
//calling a function now  meduim size defualt message 
make_shirt("meduim");
//calling a function now SMALL size defualt message
make_shirt("meduim", "I love Javascript");
