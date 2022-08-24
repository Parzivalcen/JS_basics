// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// FtoC
// use the FtoC formula, stored in c
// round the number to 1 decimal point, covert it back to a number, remove any extra zeroes
// used +toFixed to do that
const ftoc = function (f) {
  c = (f - 32) * (5 / 9);
  return +c.toFixed(1);
};

// CtoF
// use the CtoF formula, stored in f
// round the number to 1 decimal point, covert it back to a number, remove any extra zeroes
// used +toFixed to do that
const ctof = function (c) {
  f = c * (9 / 5) + 32;
  return +f.toFixed(1);
};
ftoc(100);
// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
