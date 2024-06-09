// define the function show megicain name
function show_magicains(magicains: string[]){
    magicains.forEach(name => console.log(name)); 
        }
function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`);
}
//define an arry of magicians names
let  magician_names =["Albert", "herry potter","John"]

//making of copy original arry through . slice() funnction
let copy_magicians_names = magician_names.slice();

//mofify the copy arry include "The great" with theirs names
 let copy_great_magicians = make_great(copy_magicians_names);

 //show both arrays original and copied

 show_magicains(magician_names);
 show_magicains(copy_great_magicians);