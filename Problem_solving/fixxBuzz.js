// takes user imput 
const input = parseInt(prompt('Enter a number'));
// print a number from 1 to the number entered
let counter = 0;
while (counter < input){
 counter++;
 // if a number has a reminder of 0 when divided by 3 and 5 print Fizz Buzz
 if(input%5 === 0 && input%3 === 0){
  console.log('FrizzBuzz')
  break;
  // if it divided by 3 and its reminder is 0 print Fizz
 } else if (input%3 === 3){
  console.log('Frizz')
  break;
 }
  // if it divided by 5 and its reminder is 0 print Buzz
  else if (input%5 === 0){
  console.log('Buzz')
  break;
 }
 console.log(counter)
}


