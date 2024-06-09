// define the function show megicain name
function show_magicains(magicains) {
    magicains.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
//define an arry of magicians names
var magician_names = ["Albert", "herry potter", "John"];
//making of copy original arry through . slice() funnction
var copy_magicians_names = magician_names.slice();
//mofify the copy arry include "The great" with theirs names
var copy_great_magicians = make_great(copy_magicians_names);
//show both arrays original and copied
show_magicains(magician_names);
show_magicains(copy_great_magicians);
