//return people age
// use reduce, oldest and current person arguments
// create a function to get the age
// set 'death' to current year if it does not exist
// get the age of the oldest and current argument
// compare them to which is older
const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    oldest = getAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth);
    current = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
    return oldest < current ? currentPerson : oldestPerson;
  });
};
getAge = function (Death, Birth) {
  if (!Death) {
    Death = new Date().getFullYear();
  }
  return Death - Birth;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
