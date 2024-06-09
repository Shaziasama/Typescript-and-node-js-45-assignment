

function makeSandwich(...items: string[]){
console.log("Making a sandwich with the following items:");

items.forEach(singleItem => console.log(singleItem));

console.log("Now Enjoy Sandwich!");

}
//call the function 3 items with different number of arruguments
makeSandwich("chickhen", "cheese", "Mayo","Egg");
makeSandwich("Bread","Butter");
makeSandwich("Bread","Butter","Egg","Cheese","Mayo");