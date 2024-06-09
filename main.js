"use strict";
//storing a person name in a veriable
let personName = "shazia zohaib";
//printing a person name in lower case
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\b\w/g, (char) => char.toUpperCase()));
