var currentUser = ["Ahad", "hashir", "Zohaib", "Raza", "Zeshan"];
var newUser = ["Sohail", "Ali", "Hashir", "Usman", "Ahad"];
//loop for check new user and user name ability
newUser.forEach(function (newOneUser) {
    var ourCondition = currentUser.some(function (currentOneUser) { return currentOneUser.toLowerCase() === newOneUser.toLowerCase(); });
    if (ourCondition) {
        console.log(" sorry ".concat(newOneUser, " is already taken!"));
    }
    else {
        console.log("this userName ".concat(newOneUser, " is available!"));
    }
});
