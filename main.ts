//using the array
let userName = ["sana","hina","rudaba","admin","ayfer"]

//using foreach loop methods on arrays
userName.forEach(oneUser => {
    if (oneUser === "admin"){
     console.log(`hello! ${oneUser},would you like to see a status report`);
    }else{
        console.log(`hello! ${oneUser} thank you for login again`);
    }
})
