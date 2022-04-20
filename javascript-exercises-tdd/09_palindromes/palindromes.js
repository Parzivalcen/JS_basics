// check palindromes
// Remove punctuation from string, replace it with << '' >>
// convert string to an array of letters
// reverse it and join it again
// compare it to the first sentence

const palindromes = function (sentence) {
  sentence = sentence.toLowerCase();
  let regex = /[.,:!?\s]/g;
  sentence = sentence.replace(regex, "");
  reversed = sentence.split("").reverse().join("");
  return sentence === reversed ? true : false;

  // arr.filter((letter) =>
};
console.log(palindromes("A car, a man, a maraca.!"));
// Do not edit below this line
module.exports = palindromes;
