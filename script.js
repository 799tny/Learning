const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
//destructuring
const book = getBook(3);

// const title = book.title
// title
// const author = book.author
// author
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);
// const primaryGenre = genres[0]
// const secondaryGenre = genres[1]

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);
const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  //adding a new property
  moviePublicationDate: `2001-12-19`,
  //overwriting an existing property
  pages: 210,
};
updatedBook;

//TEMPLATE LITERALS
const getYear = (str) => str.split(`-`)[0];
const summary = `${title}, a ${pages}-page long book, was written by ${author} in the year of ${getYear(
  publicationDate
)} The book ${hasMovieAdaptation ? "has" : `has not`} been adapted as a movie`;
summary;

//Ternary operators instead of IF ELSE STATEMENTS

const pagesRange = updatedBook > 1000 ? `over a thousand` : `less than 1000`;
pagesRange;

//ARROW FUNCTIONS
// function getYear(str) {
//   return str.split(`-`)[0];
// }

// const getYear = (str) => str.split(`-`)[0];

// SHORT CIRCUITING AND LIGOCAL OPERATORS && || ??

// && ignora valorile true si arata valorile false primele
console.log(true && `Some String`);
console.log(false && `Some String`);
console.log(hasMovieAdaptation && `This book has a movie`);

//falsy : 0, '', null, undefined
console.log(`tony` && `some string`);
console.log(0 && `some string`);
// && ignora valorile false si arata valorile true primele
console.log(true || `some string`);
console.log(false || `some string`);

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || `Not Translated`;
spanishTranslation;

//consecinte
//Cand avem data existenta de numar 0 il ia ca pe un falsy value si trece la no data
// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || `no data`;
// countWrong;
// // asa ca in situatia de fata folosim ??
// const count = book.reviews.librarything.reviewsCount ?? `no data`;

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  
  return goodreads + librarything;
  good;
}
// console.log(getTotalReviewCount(book));
//ARRAY MAP METHOD
const books = getBooks();
books;
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  };
});
essentialData;
// ARRAY FILTER METHOD
const longBooksWithMovie = books
.filter((book) => book.pages > 500)
.filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;
const adventureBooks = books
.filter((book) => book.genres.includes(`adventure`))
.map((book) => book.title);
adventureBooks;

//ARRAY REDUCE METHOD

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

//ARRAY SORT METHOD
const y = [3, 7, 1, 9, 6];
const sorted = y.slice().sort((a, b) => a - b); // <----- FOR ASCEDNING OR b - a for DESCENDING
sorted;
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//IMMUTABLE ARRAYS
// 1) Add book object to array
const newBook = {
  id: 6,
  title: `Harry potter and the chamber of secrets`,
  author: `JK Rwoling`,
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;
// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;
// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}
const todos = getTodos();
console.log(todos);
console.log(`jonas`);