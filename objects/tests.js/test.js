const calculator = () => ({
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => a / b,
});
console.log(calculator().sub(4, 5));

const calculator2 = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mult, div };
})();
console.log(calculator2.add(2, 3));
