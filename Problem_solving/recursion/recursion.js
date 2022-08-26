
console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []


function replicate(r, a){
  if(r<=0) return [];
  return [a].concat(replicate(r - 1, a));
}

// if arr.length == 0, return 0
// let sum = 0
// for according to array length
//    if(arr[i] is array)
//      sum += sumSquares(arr[i])
//    if(arr[i]is num)
//      sum += arr[i]**2;
// return sum
