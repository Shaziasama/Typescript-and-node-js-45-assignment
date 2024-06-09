 // for each method
 let guestList: string[] =["hina","arsalan","ubaid"];

guestList.forEach(guest => {

    console.log(`dear ${guest}, you are cordially invited to dinner`);
})
//map method

let invitation: string [] = guestList.map(guest => `Dear ${guest}, you are cordially invited`);
console.log(invitation);