 function make_shirt (size: string  = "large" ,printMessage: string ="I love typescript"){
  console.log(` creating the ${size}  shirt with the ${printMessage} print on shirt `);
}
//calling a function by defult values
make_shirt();

//calling a function now  meduim size defualt message 



make_shirt("meduim");


//calling a function now SMALL size defualt message
make_shirt("meduim", "I love Javascript");