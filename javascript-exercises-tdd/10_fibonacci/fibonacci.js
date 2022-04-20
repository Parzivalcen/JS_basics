// A fibonacci number is sum of the two predecesor numbers
// Check for negative numbers
// create and array
// add the first two values to it 0 and 1
// make a for loop pushing the sum of the two previous number to the array

const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;

  for (let i = 2; i <= 30; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib[n];
};
console.log(fibonacci(20));
// Do not edit below this line
module.exports = fibonacci;
