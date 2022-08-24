// Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
// Create an array
// Take a, b, convert it to x, y
// make it work with large number first in the order
// if a is bigger than b, put b in the position of a, and vice versa
// if number is less than 0 or is not typfo of Number Return 'ERROR'
// Do a for loop, while item is less than y push them to an array
// sum the array

const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  } else if (a < 0 || b < 0) {
    return "ERROR";
  }
  // swap with no third var
  if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
  }
  let newArr = [];

  for (let i = 1; i <= b; i++) {
    newArr.push(i);
  }
  const sum = newArr.reduce((a, b) => a + b);
  console.log(sum);
  return sum;
};

sumAll(4, 1);
// Do not edit below this line
module.exports = sumAll;
