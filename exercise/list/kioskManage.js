const { List } = require("../../lib/List");
var fs = require("fs");
const dataMovies = fs
  .readFileSync("exercise/list/movies.txt", {
    encoding: "utf8",
    flag: "r",
  })
  .split("\r\n");

const prompt = require("prompt-sync")({ sigint: true });

class Customer {
  constructor(name, movie) {
    this.name = name;
    this.movie = movie;
  }
}

function checkOut(name, movie, filmList, customerList, filmRentedList) {
  if (filmList.contains(movie)) {
    let c = new Customer(name, movie);
    customerList.append(c);
    filmRentedList.append(movie);
    filmList.remove(movie);
  } else {
    console.log(movie + " is not available\n");
  }
}

function devolution(filmList, filmRentedList) {
  let movieDevolution = prompt("\nDevolution movie: ");

  if (filmRentedList.contains(movieDevolution)) {
    filmList.append(movieDevolution);
    filmRentedList.remove(movieDevolution);
  } else {
    console.log(`\nThe film ${movieDevolution} is not found in the data\n`);
  }
}

function printAvailableMovies(moviesList) {
  console.log("Available movies:");
  moviesList.displayList();
}

function printCustomersRentals(customers) {
  console.log("\nCustomer Rentals:");
  customers.displayList();
}

function printAvailableMoviesNow(moviesList) {
  console.log("\nMovies now Available:");
  moviesList.displayList();
}

function printNotAvailableMovies(rentedMoviesList) {
  console.log("\nNot Available movies:");
  rentedMoviesList.displayList();
}

function kioskManage() {
  let moviesList = new List();
  let customers = new List();
  let rentedMoviesList = new List();
  for (let i = 0; i < dataMovies.length; i++) {
    moviesList.append(dataMovies[i]);
  }
  let follow = 1;
  while (follow) {
    printAvailableMovies(moviesList);

    if (rentedMoviesList.length())
      console.log("Not Available movies:"), rentedMoviesList.displayList();

    let name = prompt("Enter you name: "); //enter your name
    let movie = prompt("What movie would you like? "); //enter your movie

    checkOut(name, movie, moviesList, customers, rentedMoviesList);

    printCustomersRentals(customers);

    printAvailableMoviesNow(moviesList);

    printNotAvailableMovies(rentedMoviesList);

    let respDevolution = prompt(
      "Do you want to return a movie (1:Yes or 0:No): "
    );
    Number(respDevolution) ? devolution(moviesList, rentedMoviesList) : "";

    follow = Number(prompt("your continues? (1:Yes or 0:No): "));
  }
}

// let moviesList = new List();
// let customers = new List();
// let rentedMoviesList = new List();
// for (let i = 0; i < dataMovies.length; i++) {
//   moviesList.append(dataMovies[i]);
// }
// console.log("Available movies:");
// moviesList.displayList();
// console.log("\nNot Available movies:");
// rentedMoviesList.displayList();
// console.log("\nEnter you name: ");
// let name = "jimmy"; //enter your name
// console.log(`${name}\n`);
// console.log("What movie would you like? ");
// let movie = "Fight Club"; //enter your movie
// console.log(`${"Fight Club"}\n`);
// checkOut(name, movie, moviesList, customers, rentedMoviesList);
// checkOut("Pedro", "The Godfather", moviesList, customers, rentedMoviesList);
// checkOut("Juan", "Goodfellas", moviesList, customers, rentedMoviesList);
// console.log("\nCustomer Rentals:");
// customers.displayList();
// console.log("\nMovies now Available:");
// moviesList.displayList();
// console.log("\nNot Available movies:");
// rentedMoviesList.displayList();
// console.log("\nDevolution movie:");
// let movieDevolution = "Goodfellas";
// console.log(`${movieDevolution}\n`);
// devolution(movieDevolution, moviesList, rentedMoviesList);
// console.log("\nMovies now Available:");
// moviesList.displayList();

kioskManage();
