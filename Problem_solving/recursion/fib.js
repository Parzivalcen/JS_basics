console.log(fibsRec(8));

function fibsRec (n, arr = [0, 1]){
  if(arr.length === n) return arr;

  let next = arr.at(-1) + arr.at(-2);

  arr.push(next);

  return fibsRec(n, arr);
}

// if arr.length = or > n, return arr

// next = arr.at(-1) + arr.at(-2);

// arr.push(next)

// return fibsRec(n, arr);