// Write a function that returns True if an object is empty,
// else returns false
let a = { name: "john" };
console.log(a);
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty(a));
