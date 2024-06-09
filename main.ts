let currentUser =["Ahad", "hashir","Zohaib","Raza", "Zeshan"]

let newUser = ["Sohail","Ali","Hashir","Usman","Ahad"]

//loop for check new user and user name ability
newUser.forEach(newOneUser => {
    let ourCondition = currentUser.some(currentOneUser => currentOneUser.toLowerCase()===newOneUser.toLowerCase())
  if(ourCondition){
    console.log(` sorry ${newOneUser} is already taken!`)
  }else{
    console.log(`this userName ${newOneUser} is available!`)
}
})