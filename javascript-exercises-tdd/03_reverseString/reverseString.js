
// create a function that reverts a str
const reverseString = function(str) {
  // split the string
  // rever the str
  let splited = Array.from(str).reverse();
  // join it back
  let reversed = splited.join('')
  return reversed
  
};

// Do not edit below this line
module.exports = reverseString;
