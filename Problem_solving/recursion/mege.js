const arr = [2, 4, 1, 5, 9,10, 11, 12, 14]

console.log(sort(arr));

// helper
function merge(leftHalf, righHalf){
  const arr = [];
  let leftIndex = 0;
  let righIndex = 0;

  while(leftIndex < leftHalf.length && righIndex <righHalf.length){
    const leftItem = leftHalf[leftIndex];
    const righItem = righHalf[righIndex];

    if(leftItem < righItem){
      arr.push(leftItem);
      leftIndex++
    }else{
      arr.push(righItem);
      righIndex++
    }
  }

  return [...arr, ...leftHalf.slice(leftIndex), ...righHalf.slice(righIndex)]
}


function sort(arr){

  if(arr.length <= 1)return arr;
  const middle = Math.floor(arr.length/2);
  const leftHalf = arr.slice(0, middle);
  const righHalf = arr.slice(middle);
  return merge(sort(leftHalf), sort(righHalf));
}