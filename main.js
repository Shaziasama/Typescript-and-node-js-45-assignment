"use strict";
let guestLists = ["hina", "arslan", "ubaid"];
//print the name who cant attend dinner
let unableAttend = guestLists[0];
console.log(`${unableAttend} not invited for dinner`);
let personAttend = ("Ahmed");
//replacing the name into array
guestLists[guestLists.indexOf(unableAttend)] = personAttend;
guestLists.forEach(name => {
    console.log(`Dear ${name} you are invited to dinner!`);
});
