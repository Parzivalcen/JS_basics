let nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}
// non recursive factorial
// sumRange(3);
let seven = totalInts([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

console.log(seven);

function totalInts(arr){
  if(arr.length===0) return 0;
  let count = 0;
  let first = arr.shift();

  if(Array.isArray(first)){
    console.log('arr', first);
    count += totalInts(first);
  }
  if(Number.isInteger(first)){
    console.log('n', first);
    count ++;
  }

  return count + totalInts(arr);
}

// base case; if arr.length == 0, return 0;
// count = 0;
// get first elements of arr every call, first = arr.shift();
// if first is array
//    count += totalints(first);
// if first is num
//    count += 1
// return count += totalInts(arr);
