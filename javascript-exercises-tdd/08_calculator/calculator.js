// add argument
// gonna have to use ...args probably
// check if the array is empty
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));
const subtract = function (a, b) {
  return a - b;
};

const sum = function (...args) {
  let arr = args[0];
  const arrayLen = arr.length;
  if (arrayLen == 0) {
    return 0;
  }
  // DIY REDUCE
  let sum = 0;
  for (let i = 0; i < arrayLen; i++) {
    sum += arr[i];
  }
  return sum;
  arr.reduce((a, b) => a + b);
};
console.log(sum([1, 3]));

const multiply = function (...args) {
  let arr = args[0];
  const arrLen = arr.length;
  let mult = 1;
  for (let i = 0; i < arrLen; i++) {
    mult *= arr[i];
  }
  return arr.reduce((a, b) => a * b);
  return mult;
};

const power = function (a, b) {
  return a ** b;
};

//
const factorial = function (n) {
  // Recursion
  if (n === 0) return 1;
  else return n * factorial(n - 1);

  a = n;
  for (let i = 1; i < n; i++) {
    a *= i;
  }
  if (a === 0) {
    a = 1;
  }
  return a;
};
console.log(factorial(1));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
