console.log(fibsRec(8), normalFib(7));
console.log(fibs(8));




function fibs(n){
  let arr = []
  let fib0 = 0;
  let fib1 = 1;
  let fib = 0;

  while(arr.length<n){
    arr.push(fib)
    fib0 = fib1;
    fib1 = fib;
    fib=  fib0 + fib1;

  }
  return arr;
}
// arr = []
// fib0 = 0
// fib1 = 1
// fib = 0

// while(arr length < n)
//    arr.push(fib)
//    fib0 = fib1
//    fib1 = fib
//    fib = fib0 + fib1
// return fib


function normalFib(n){

  return n-1 + n-2;
}



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