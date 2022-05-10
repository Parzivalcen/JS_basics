// Implement a function that takes an array and some other arguments then removes the other arguments from that array:
// use rest parameter "(...args)"
// Print the array
// remove n from arr
// check in what index n is in arr
// remove from array
// remove multiple items
// go trhough the second array to see what to remove
const removeFromArray = function (...args) {
  let arr = args[0];
  const newArr = [];

  // if the item is not in the second argument of args, push to the new array
  arr.forEach((item) => {
    if (!args.includes(item)) {
      console.log(item);
      newArr.push(item);
    }
  });
};

removeFromArray([1, 2, "jk", "del", 4, 1, 2, 3], 2, 3, "del");

// Do not edit below this line
module.exports = removeFromArray;
