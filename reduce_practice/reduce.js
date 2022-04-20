const people = [
  { id: "1", name: "Leigh", age: 35 },
  { id: "2", name: "Jenny", age: 30 },
  { id: "3", name: "Heather", age: 28 },
];

let result;
// count
// the first argument in reduce is an accumulator "acc" is like we usually represent it it
// the second argument goes over the element or objs in this case
// it has to have a value inizilizer, in this case of zero, this is for the accumulator

result = people.reduce((acc, person) => acc + 1, 0);

// sum ages
result = people.reduce((acc, person) => acc + person.age, 0);

// array of names (map)

// mapping with reduce
// we start with an empty array this time as the value inizializer for "acc"

// return all of the previous plus the new name
result = people.reduce((acc, person) => [...acc, person.name], []);

// convert to id => person lookup (dict)
// we can use reduce to make a lookup "table"
// we assign a key of with the ID of each person.
// our initial value is object because that is what we return

result = people.reduce((acc, person) => {
  return { ...acc, [person.id]: person };
}, {});

// console.log(result[3]);

// max age
// if we want to use math.max we have to map the array to just get numbers and then find the max of those
// acc is our current max number(?
result = people.reduce((acc, person) => {
  if (acc === null || person.age > acc) return person.age;
  return acc;
}, null);

// min age
result = people.reduce((acc, person) => {
  if (acc === null || person.age < acc) return person.age;
  return acc;
}, null);

// Find by name
result = people.reduce((acc, person) => {
  if (acc !== null) return acc;
  if (person.name === "Heather") return person;
  return null;
}, null);

// All over 18
result = people.reduce((acc, person) => {
  if (!acc) return false;
  return person.age > 38;
}, true);

// any over 18
result = people.reduce((acc, person) => {
  if (acc) return true;
  return person.age > 31;
}, false);

const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
];

// we want an object with and status and how many times the status is repeated
// create a key for the statuses,
// if the key is already in the object sum + 1,
// if not initialize it to zero
result = orders.reduce((acc, order) => {
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});

// Flatten
// It can work for a folder or folders route for example
// We check if the item is an array
// if it is the function call it self, to chek if there are arrays in the array
// if it not, it spread the items and added to a single array
// call the reduce funtion on the folders names array, and initialize and empty array.

const folders = [
  "index.js",
  ["flatten.js", "map.js"],
  ["any.js", ["all.js", "count.js"]],
];

function flatten(acc, item) {
  if (Array.isArray(item)) {
    return item.reduce(flatten, acc);
  }
  return [...acc, item];
}
result = folders.reduce(flatten, []);

// My own reduce function
function reduce1(array, callback, initial) {
  let acc = initial;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}

result = reduce1([1, 2, 3], (acc, num) => acc + num, 0);
console.log(result);
