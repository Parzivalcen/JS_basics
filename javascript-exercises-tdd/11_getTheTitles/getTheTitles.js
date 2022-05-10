// get titles of books
// the argument is an object
// use map
// create an arrow funciton inside the funtion
// and selet title of each object in the array

const getTheTitles = function (obj) {
  titles = obj.map((book) => book.title);
  return titles;
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];
console.log(getTheTitles(books));
// Do not edit below this line

module.exports = getTheTitles;
