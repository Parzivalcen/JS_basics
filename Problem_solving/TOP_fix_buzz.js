// takes user imput 
const input = parseInt(prompt('Enter a number'));
// loop from 1 to entered number
for (let i = 1; i<=input; i++) {
 // if a CURRENT number has a reminder of 0 when divided by 3 and 5 print Fizz Buzz
 if(i%5 === 0 && i%3 === 0){
  console.log('FrizzBuzz')
  
  // if it divided by 3 and its reminder is 0 print Fizz
 }else if(i%3 === 0 ) {
  console.log('Fizz')
  
  // if it divided by 5 and its reminder is 0 print Buzz
 }else if(i %5 ===0) {
  console.log('Buzz')
  
  
  // print a number from 1 to the number entered
 }else console.log(i);
 
}

