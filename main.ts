let apple = "apple";
let uppercaseApple= "APPLE";
let ten = 10;
let twenty = 20;
let weather = ["Summer","Winter","Autumn" ,"Spring"]
//test equality and inequality with string
console.log("is apple is equal to apple?");
console.log(apple == "apple");

console.log("is apple is not equal to apple?");
console.log(apple != "apple");

//testing using lowercase function
 console.log("is APPLE is equal to apple convernting to lowercase?"); 
 console.log(uppercaseApple.toLowerCase() == "apple");
 console.log("is APPLE is not equal to apple convernting to lowercase?");
 console.log(uppercaseApple.toLowerCase() != "apple");

 //numerical test
 console.log("is ten  is equal to twenty?");
 console.log(ten == twenty);
// not equal to
 console.log("is ten  is not equal to twenty?");
 console.log(ten != twenty);

 //greather than
 console.log("is ten is greather than twenty?");
 console.log(ten > twenty);

 //less than
 console.log("is ten is less than twenty?");
 console.log(ten < twenty);

 //greater than or equal to
 console.log("ten is grether than or equal to twenty?");
 console.log(ten >= twenty);

 //less than or equal to
 console.log(" ten is smaller than or equal to twenty?");
console.log(ten <= twenty);

//test using "and"& "or"operators
//using "and"&8
console.log("twenty is not equal to ten and twenty is greather than ten");
console.log(twenty !=  10 && twenty > 10);

console.log("ten is equal to twenty or ten is greather than twenty");
console.log(twenty ==10 && ten > twenty)

//using "or" ||
console.log("ten is  not equal to twenty or twenty is greather than ten");
 console.log(twenty != 10 || twenty > 10);

 console.log("twenty is equal to ten or tewnty is smaller than ten");
 console.log(twenty == 10 || twenty < 10);

 // using array
 console.log("weather names in arry")
 console.log(weather);

 //include summer weather in arry
 console.log("is summer weather included in array?");
 console.log(weather.includes("Summer"));

 //not include in arry
 console.log("is summer weather not included in array?");
 console.log(!weather.includes("Summer"));

 
