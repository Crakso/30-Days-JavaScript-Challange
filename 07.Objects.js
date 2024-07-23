/*
    Activity 1 : Object Creation and Access
*/

//Task 1
const Book = { title: "History", author: "akki", year: 1990 };

function createObject() {
  // const Book = Object();
  const Book = {};

  // const Book = { title: "History", author: "akki", year: 2020 };

  Book.title = "History";
  Book.author = "akki";
  Book.year = 2002;

  // console.log(Book);
  return Book;
}

// console.log(createObject());

//Task 2

function accessObject() {
  //   console.log(Book["title"], Book["author"]);

  return { title: Book["title"], author: Book["author"] };
  // console.table([Book.title, Book.author]);
}

// console.log(accessObject());

/*
    Activity 2 : Object Methods
*/

//Task 3

function getKeyValue() {
  // console.log(Object.assign({}, Book));

  const values = { ...Book };
  // console.log(values);
  return `The author name is ${values.author} and The Title of the Book is ${values.title}.`;
}

// console.log(getKeyValue());

//Task 4

function updateYear(year = Book.year) {
  Book.year = year;
  return Book;
}

// console.log(updateYear(2000));

/*
    Activity 3 : Nested Objects
*/

//Task 5

function createLibrary(name = "Book1") {
  const library = {
    name,
    Books: [Book, Book, Book],
  };
  return library;
}
// console.log(createLibrary("Book2"));

//Task 6

function fetchBooks() {
  const { name, Books } = createLibrary();
  console.log(name);
  return Books;
}

// fetchBooks().map((e) => console.log(e.title));

/*
    Activity 4 : This Keyword
*/

//Task 7

function Books(title, year) {
  this.title = title;
  this.year = year;
  this.string = function () {
    return `Title of the Book is ${this.title} and Year is ${this.year}.`;
  };
}

const book1 = new Books("Book1", 2000);
// console.log(book1);
// console.log(book1.string());

/*
    Activity 5 : Object Iteration.
*/

//Task 8

for (const key in Book) {
  if (Object.hasOwnProperty.call(Book, key)) {
    // console.log(key, Book[key]);
  }
}

//Task 9

function ObjectKeys() {
  return Object.keys(Book);
}
function ObjectValues() {
  return Object.values(Book);
}

// console.log(ObjectKeys());
// console.log(ObjectValues());
