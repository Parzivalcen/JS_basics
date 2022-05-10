// A fibonacci number is sum of the two predecesor numbers
// Check for negative numbers
// create and array
// add the first two values to it 0 and 1
// make a for loop pushing the sum of the two previous number to the array

const fibonacci = function (n) {
  n = +n; // converts to numbers if it is string.
  if (n < 0) {
    return "OOPS";
  }
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(7));
// Do not edit below this line
module.exports = fibonacci;
