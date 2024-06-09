// define the function show megicain name
function show_magicains(magicains: string[]){
    magicains.forEach(name => console.log(name)); 
        }
function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`);
}
//define an arry of magicians names
let magicians_names =["Albert", "herry potter","John"]

let great_magicians = make_great(magicians_names);
show_magicains(great_magicians)