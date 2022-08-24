function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.info = function () {
    return `${title}, by ${author}, ${numberOfPages} pages, ${read}.`;
  };
}

const book1 = new Book(
  "The war of art",
  "Steven Pressfield",
  222,
  "Already read"
);
console.log(book1.info());
