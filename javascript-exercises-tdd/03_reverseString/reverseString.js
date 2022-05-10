// create a function that reverts a str
const reverseString = function (str) {
  // Array.from creates a array from a str
  // reverse, reverses the array lol
  let reversed = [];
  reversed = Array.from(str).reverse();
  reversed = reversed.join("");
  return reversed;
};
reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
