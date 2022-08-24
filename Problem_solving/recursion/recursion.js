console.log(power(3, 3))

// sumRange(3);

function power(b, e){
  if(e===0) return 1;
  return  (b * power(b, e -1));
}

// Take a base and a exponent number as an arguments
// If e === 0 return 1;
// else 