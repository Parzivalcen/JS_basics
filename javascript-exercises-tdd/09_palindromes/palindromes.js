// check palindromes
// Remove punctuation from string, replace it with << '' >>
// convert string to an array of letters
// reverse it and join it again
// compare it to the first sentence

const palindromes = function (sentence) {
  const p = /[.?!`':;/,\s]/g;
  sentence = sentence.toLowerCase().replace(p, "");
  const reversed = sentence.split("").reverse().join("");
  return reversed === sentence ? true : false;
};
console.log(palindromes("A car, a man, a maraca.!"));
// Do not edit below this line
module.exports = palindromes;
