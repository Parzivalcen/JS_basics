// write function that takes 2 arguments
// first one is a str and second a number
// repeat the str as many times as the number

let counter = 0;
const repeatString = function (string, num) {
  // make loop as many times as num
  // create a variable to store the str
  // return a str
  let str = "";
  if (num < 0) {
    return "ERROR";
  }
  for (n = 0; n < num; n++) {
    str = str.concat(string);
    counter++;
  }
  return str;
};
console.log(repeatString("hey", 10));
// Do not edit below this line
module.exports = repeatString;
