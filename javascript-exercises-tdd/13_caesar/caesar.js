// Convert string to unicode values
// Create array where to push the rotated chars
// get unicode value for current char
const caesar = function (string, key) {
  const stringLen = string.length;
  let encryp = [];
  for (let i = 0; i < stringLen; i++) {
    encryp.push(rotate(string[i], key));
  }
  let caesar = encryp.join("");
  console.log(caesar);
  return caesar;
  function rotate(char, key) {
    //check if char is upper Case
    if ((char.length === 1 && char.match(/[a-z]/g)) || char.match(/[A-Z]/g)) {
      let rotate;
      if (char == char.toUpperCase()) {
        char = char.charCodeAt(0);
        char = char + key - 65; // 65 == A;
        rotate = ((char % 26) + 26) % 26; // negative into positive
        char = rotate;
        char += 65;

        return String.fromCharCode(char);
      }
      char = char.charCodeAt(0);
      char = char + key - 97; // 97 == a;
      rotate = ((char % 26) + 26) % 26;
      char = rotate;
      char += 97;
      return String.fromCharCode(char);
    } else {
      return char;
    }
  }
};

// Do not edit below this line
caesar("B", -5);
console.log("a".charCodeAt(0));
module.exports = caesar;

// if char is negative
//
