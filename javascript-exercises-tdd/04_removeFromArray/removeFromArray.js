// Implement a function that takes an array and some other arguments then removes the other arguments from that array:
// use rest parameter "(...args)"
// Print the array
// remove n from arr
// check in what index n is in arr
// remove from array 
// remove multiple items 
// go trhough the second array to see what to remove 
const removeFromArray = function(...args) {
  let arr = args[0];
  const newArr = [];
  console.log(arr);
  // go through the array
  arr.forEach((item) => {
    // console.log(item);
    // looks at the arguments again
    // if there are mathching values to arr, remove them
    // the ! signals that is NOT in the array
    if (!args.includes(item)){
      newArr.push(item);
    }
  })
  // arr = arr.filter((item) => item !== toRemove)
  console.log(newArr)
  return newArr;

};



// removeFromArray([1, 2, 'jk', 'del', 4, 1, 2,3], 2,3,'del')

// Do not edit below this line
module.exports = removeFromArray;
