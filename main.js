"use strict";
let guestLists = ["hina", "arslan", "ubaid"];
//print the name who cant attend dinner
let unableAttend = guestLists[0];
console.log(`${unableAttend} not invited for dinner`);
//add or remove guest from guest list array
guestLists.splice(0, 1, "Ahmed");
//  message print for bigger table
console.log("Good news! we have found a bigger table for dinner");
//adding a new guest at strting index of array
guestLists.unshift("Ali");
//adding a new guest at ending index of array
guestLists.push("zain");
// get a middle index of array
let middleIndex = Math.floor(guestLists.length / 2);
//adding a new guest middle index of array
guestLists.splice(middleIndex, 0, "Usama");
console.log("updated list of our guest");
guestLists.forEach(oneguest => console.log(`salam ${oneguest} ,would you like to dinner with me`));
