var guestLists = ["hina", "arslan", "ubaid"];
//print the name who cant attend dinner
var unableAttend = guestLists[0];
console.log("".concat(unableAttend, " not invited for dinner"));
var personAttend = "Ahmed";
//replacing the name into array
guestLists[guestLists.indexOf(unableAttend)] = personAttend;
guestLists.forEach(function (name) {
    console.log("Dear ".concat(name, " you are invited to dinner!"));
});
