// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
// Create an array
// Take a, b, convert it to x, y 
// make it work with large number first in the order 
  // if a is bigger than b, put b in the position of a, and vice versa
// if number is less than 0 or is not typfo of Number Return 'ERROR'
// Do a for loop, while item is less than y push them to an array 
// sum the array


const sumAll = function(a, b) {
  arr = [];
  let x = a;
  let y = b;
  if(a > b){
    x = b;
    y = a;
  }

  if(y < 0 || x < 0){
    return "ERROR";
  }else if(typeof y !== 'number' || typeof x !== 'number'){
    return "ERROR"
  }
  
  for(let i = 1; i<=y; i++){
    arr.push(i);
  }
  const sum = arr.reduce((a, b) => a+b );
  return sum;
  


}


// sumAll(4, 1)
// Do not edit below this line
module.exports = sumAll;
