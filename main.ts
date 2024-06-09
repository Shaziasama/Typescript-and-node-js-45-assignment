let numbers = [1, 2, 3, 4, 5 , 6, 7, 8 ,9]

//using for loop
for( let oneNumber of numbers){
    let oridenalEnding:string;
if(oneNumber === 1){
    oridenalEnding = "st"
}
else if(oneNumber === 2){
    oridenalEnding = "nd"
}
else if(oneNumber === 3){
    oridenalEnding = "rd"
}
else{
    oridenalEnding = "th"
}
console.log(`${oneNumber}${oridenalEnding}`)
}