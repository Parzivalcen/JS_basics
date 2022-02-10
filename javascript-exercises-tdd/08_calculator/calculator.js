// add argument
// gonna have to use ...args probably
// check if the array is empty
const add = function (...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }

  return sum;
};

console.log(add(2, 3));
const subtract = function (a, b) {
  return a - b;
};

const sum = function (...args) {
  let sum = args[0];
  if (sum.length === 0) {
    return 0;
  }
  sum = sum.reduce((n, a) => {
    return n + a;
  });

  return sum;
};
console.log(sum([1, 3]));

const multiply = function (...args) {
  let mult = args[0];
  if (mult.length === 0) {
    return 0;
  }
  mult = mult.reduce((n, a) => {
    return n * a;
  });

  return mult;
};

const power = function (a, b) {
  return a ** b;
};

//
const factorial = function (n) {
  if (n === 0) {
    return 1;
  }
  for (let i = n - 1; i > 0; i--) {
    n *= i;
    console.log(i);
  }
  return n;
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
