let allAreLessThanSeven = all([1,3,6], function(num){
  return num < 7
})
// non recursive factorial
// sumRange(3);

function all(arr, callBack){
  let copy = arr.slice() || copy;

  if(copy.length === 0) return true
  if(callBack(copy[0])){
    copy.shift();
    return all(copy, callBack);
  }else{
    return false;
  }
}
console.log(allAreLessThanSeven);

// make a copy of the original array
// if copy.length === 0, return true
// if(callBack(copy(0)))
//    remove first item of the arr
//    return all(copy, callback)
// return false;

