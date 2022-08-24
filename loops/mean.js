const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];


// loop starts here
// create arrray with rejected and admitted guests
let rejected = [];
let admited = [];
// write a loop that iterate trought the peopel in the array
for (const person of people){
 // Check if phil or lola are present
 if(person == 'Phil' || person == 'Lola'){
  rejected.push(person);
 }else{
  admited.push(person);
 }
 
}
// add a '.' to the end of each one
// convert array to a string

let rejectedJoined = rejected.join(', ')+'.';
let admitedJoined = admited.join(', ')+'.';
console.log(rejectedJoined);
console.log(admitedJoined);




// refused.textContent += ;
// admitted.textContent += ;
