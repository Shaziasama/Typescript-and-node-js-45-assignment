var guestLists = ["hina", "arslan", "ubaid"];
//print the name who cant attend dinner
var unableAttend = guestLists[0];
console.log("".concat(unableAttend, " not invited for dinner"));
//add or remove guest from guest list array
guestLists.splice(0, 1, "Ahmed");
//  message print for bigger table
console.log("Good news! we have found a bigger table for dinner");
//adding a new guest at strting index of array
guestLists.unshift("Ali");
//adding a new guest at ending index of array
guestLists.push("zain");
// get a middle index of array
var middleIndex = Math.floor(guestLists.length / 2);
//adding a new guest middle index of array
guestLists.splice(middleIndex, 0, "Usama");
console.log("updated list of our guest");
guestLists.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, " ,would you like to dinner with me")); });
//question 17 
//inform that only two guest can be invited for dinner
console.log("unfortunatlt,the new dinner table wont arrive on time, so I can only invite two guest with me");
//while
while (guestLists.length > 2) {
    var removedGuest = guestLists.pop();
    console.log("sorry ,".concat(removedGuest, " I cant invite you to dinner"));
}
//sending the invitation to the last guest on the list
console.log("Invitations to the last 2 guest");
guestLists.forEach(function (lasttwo) { return console.log("Lucky ALI,AMIR $(lasttwo you are still invited"); });
//removing last two guest from the list
guestLists.pop();
guestLists.pop();
console.log("Empty List: " + guestLists);
