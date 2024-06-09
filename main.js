// define the function show megicain name
function show_magicains(magicains) {
    magicains.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
//define an arry of magicians names
var magicians_names = ["Albert", "herry potter", "John"];
var great_magicians = make_great(magicians_names);
show_magicains(great_magicians);
