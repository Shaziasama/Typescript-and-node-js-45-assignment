//using the array
var userName = ["sana", "hina", "rudaba", "admin", "ayfer"];
//using foreach loop methods on arrays
userName.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("hello! ".concat(oneUser, ",would you like to see a status report"));
    }
    else {
        console.log("hello! ".concat(oneUser, " thank you for login again"));
    }
});
