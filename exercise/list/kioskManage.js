const { List } = require("../../lib/List");
var fs = require("fs");
const dataMovies = fs
  .readFileSync("./movies.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .split("\r\n");

function checkOut(name, movie, filmList, customerList, filmRentedList) {
  if (moviesList.contains(movie)) {
    let c = new Customer(name, movie);
    customerList.append(c);
    filmRentedList.append(movie);
    filmList.remove(movie);
  } else {
    console.log(movie + " is not available\n");
  }
}

function devolution(movie, filmList, filmRentedList) {
  if (filmRentedList.contains(movie)) {
    filmList.append(movie);
    filmRentedList.remove(movie);
  } else {
    console.log(`\nThe film ${movie} is not found in the data\n`);
  }
}

let moviesList = new List();
let customers = new List();
let rentedMoviesList = new List();
for (let i = 0; i < dataMovies.length; i++) {
  moviesList.append(dataMovies[i]);
}

console.log("Available movies:");
moviesList.displayList();
console.log("\nNot Available movies:");
rentedMoviesList.displayList();
console.log("\nEnter you name: ");
let name = "jimmy"; //enter your name
console.log(`${name}\n`);
console.log("What movie would you like? ");
let movie = "Fight Club"; //enter your movie
console.log(`${"Fight Club"}\n`);
checkOut(name, movie, moviesList, customers, rentedMoviesList);
checkOut("Pedro", "The Godfather", moviesList, customers, rentedMoviesList);
checkOut("Juan", "Goodfellas", moviesList, customers, rentedMoviesList);
console.log("\nCustomer Rentals:");
customers.displayList();
console.log("\nMovies now Available:");
moviesList.displayList();
console.log("\nNot Available movies:");
rentedMoviesList.displayList();
console.log("\nDevolution movie:");
let movieDevolution = "Goodfellas";
console.log(`${movieDevolution}\n`);
devolution(movieDevolution, moviesList, rentedMoviesList);
console.log("\nMovies now Available:");
moviesList.displayList();
