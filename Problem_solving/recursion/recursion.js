console.log(factorial(5))

// sumRange(3);

function factorial(n){
  if(n===1) return 1;
  return  n * factorial(n-1);
}

// Take a base and a exponent number as an arguments
// If e === 0 return 1;
// else 