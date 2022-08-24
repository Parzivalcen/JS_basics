function* idGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const id = idGenerator();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
