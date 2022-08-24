// Collatz says that, by using this formula is always posible to get back to one
// if n is 1 return 1
// if n is odd do 3n+1
// if n is even do n/2, until you reach 1.
function collatz(n) {
  if (n === 1) {
    return 1;
  }
  if (n % 2 !== 0) {
    return collatz(3 * n + 1);
  }
  return collatz(n / 2);
}
console.log(collatz(111));
