let userName = ["sana","hina","rudaba","admin","ayfer"]
if (userName.length === 0) {
    console.log("your array is empty we need to find some users!");
}else{

//using foreach loop methods on arrays
userName.forEach(oneUser => {
    if (oneUser === "admin"){
     console.log(`hello! ${oneUser},would you like to see a status report`);
    }else{
        console.log(`hello! ${oneUser} thank you for login again`);
    }
})}
