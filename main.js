// define a function to print each magician name from  an array
function show_megicians(megicians) {
    megicians.forEach(function (name) { return console.log(name); });
}
//define an array containing magicians name
var magicians_names = ["Albert", "Molecular", "Herry potters"];
//call the function to print each magicians name
show_megicians(magicians_names);
