//define a functions to create a car object with optical option
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //intialize a car object with manufacturer and model
    var car = {
        manufacture: manufacturer,
        model: model,
    };
    //add aditional option to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//call the function to creat  car object
var myCar = createCar("Toyota", "coroalla", "color: Black", "sunroof: True", "Year:2024");
console.log(myCar);
