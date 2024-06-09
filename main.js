function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("Now Enjoy Sandwich!");
}
//call the function 3 items with different number of arruguments
makeSandwich("chickhen", "cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Egg", "Cheese", "Mayo");
