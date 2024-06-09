//define a functions to create a car object with optical option
function createCar(manufacturer,model, ...options){
//intialize a car object with manufacturer and model
let car = {
    manufacture:manufacturer,
    model:model,
    
};
//add aditional option to the car object
options.forEach(option => {
    let [ key , value ] = option.split(":");
    car[key.trim()] = value.trim();

})
return car;
}
//call the function to creat  car object
let myCar = createCar("Toyota","coroalla" ,"color: Black","sunroof: True","Year:2024");

console.log(myCar);