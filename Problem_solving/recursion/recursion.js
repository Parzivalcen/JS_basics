let six = productOfArray([1,2,3]) // 6
let sixty = productOfArray([1,2,3,10]) // 60
// non recursive factorial
// sumRange(3);
console.log(six, sixty);
function productOfArray(arr){
  let copy = arr.slice() || copy;

  if(copy.length === 0) return 1;
  return copy.shift() * productOfArray(copy);
}


// if arr.length == 0, return
// return arr.shift * productOfArray(arr);

