"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//store the location in arry alphabetical order
let countriesToVisit = ["China", "Denmark", "Bareen", "  Australia",];
//ptint the arry original odrder
console.log("original oder: ", countriesToVisit);
//print the arry in alphanbitical oder without modifying the actual l
console.log("alphabetical order: ", [...countriesToVisit].sort());
//show that the arry is still in its original order
console.log("still aphabetical order:", countriesToVisit);
//print the arry in reverse order
console.log("Reverse order:", [...countriesToVisit].reverse());
//show that the arry is still in orginal oder
console.log("still aphabetical order:", countriesToVisit);
// we have changed the original arry oder now
console.log("original Arry reverse:", countriesToVisit.reverse());
//print the arry to show its original oder
console.log("back to original arry:", countriesToVisit.reverse());
//print the arry to show and change alphabetical oder
console.log("sorted in alphabetical order:", countriesToVisit.sort());
//arry reverse again
console.log("original arry Reversed:", countriesToVisit.reverse());
