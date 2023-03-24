# Data Structure & Algoritthms with JavaScript

| Index     | Title                                                                 |
| --------- | --------------------------------------------------------------------- |
| Charter 2 | [Array](#two-dimensional-and-multidimensional-arrays-chapter-2-array) |
| Charter 3 | [List A List ADT](#list-a-list-adt-chapter-3)                         |
| Charter 4 | [Stack](#stack-charter-4)                                             |
| Charter 5 | [Queue](#queue-charter-5)                                             |
| Charter 6 | [Linked List](#linked-list-charter-6)                                 |
| Charter 6 | [Doubly Linked List](#doubly-linked-list)                             |
| Charter 6 | [Circularly Linked List](#circularly-linked-list)                     |

## Two-Dimensional and Multidimensional Arrays (Chapter 2 Array)

### 1. Cree un objeto de calificaciones que almacene un conjunto de calificaciones de estudiantes en un objeto. Proporcione

una función para agregar una calificación y una función para mostrar el promedio de calificaciones del estudiante

```js
function grades() {
  this.dataGrade = [];
  this.add = add;
  this.average = average;
}

function add(grade) {
  return this.dataGrade.push(grade);
}

function average() {
  let total = 0;
  for (let i = 0; i < this.dataGrade.length; i++) {
    total += this.dataGrade[i];
  }
  return total / this.dataGrade.length;
}

let gd = new grades();
gd.add(10);
gd.add(20);
gd.add(12);
gd.add(15);
gd.average();
```

> Otra forma de hacerlo con clases

```js
class WeekTemps {
  constructor() {
    this.dataTemps = [];
  }
  add(temp) {
    this.dataTemps.push(temp);
  }
  average() {
    let total = 0;
    for (let i = 0; i < this.dataTemps.length; i++) {
      total += this.dataTemps[i];
    }
    return total / this.dataTemps.length;
  }
}

let roomTemps = new WeekTemps();
roomTemps.add(43);
roomTemps.add(23);
roomTemps.add(13);
roomTemps.add(3);
roomTemps.average();
```

### 2. Almacene un conjunto de palabras en una matriz y muestre los contenidos hacia adelante y hacia atrás

```js
function createArray() {
  this.dataArray = [];
  this.add = add;
  this.reverting = reverting;
}
function add(elementArray) {
  return this.dataArray.push(elementArray);
}
function reverting() {
  return this.dataArray.reverse();
}

let greeting = new createArray();
greeting.add("hola");
greeting.add("hello");
greeting.add("bon day");
greeting.reverting();
greeting.reverting();
```

### 3. Modifique el objeto WeeklyTemps en el capítulo prev para que almacene los datos de un mes utilizando una matriz bidimensional. Cree funciones para mostrar el promedio mensual, el promedio de una semana específica y los promedios de todas las semanas

```js
function WeeklyTemp() {
  this.dataWeekTemps = [];
  this.averageWeek = averageWeek;
  this.averageMount = averageMount;
  this.addWeekTemps = addWeekTemps;
}
function addWeekTemps(numberWeek, temps) {
  return (this.dataWeekTemps[numberWeek] = [...temps]);
}
function averageWeek(numberWeek) {
  let total = 0;
  for (let i = 0; i < this.dataWeekTemps[numberWeek].length; i++) {
    total += this.dataWeekTemps[numberWeek][i];
  }
  return total / this.dataWeekTemps[numberWeek].length;
}
function averageMount() {
  let total = 0;
  for (let i = 0; i < this.dataWeekTemps.length; i++) {
    for (let j = 0; j < this.dataWeekTemps[i].length; j++) {
      total += this.dataWeekTemps[i][j];
    }
  }
  return total / (this.dataWeekTemps.length * this.dataWeekTemps[0].length);
}
let mountOne = new WeeklyTemp();
mountOne.addWeekTemps(0, [20, 13, 16, 19, 30, 10, 15]);
mountOne.addWeekTemps(1, [10, 20, 30, 21, 10, 15, 18]);
mountOne.addWeekTemps(2, [10, 20, 10, 10, 23, 10, 5]);
mountOne.averageWeek(1);
mountOne.averageWeek(2);
mountOne.averageMount();
console.log(mountOne.dataWeekTemps);
```

### 4. Cree un objeto que almacene letras individuales en una matriz y tenga una función para mostrar las letras como una sola palabra

```js
class LetterStore {
  constructor() {
    this.dataLetters = ["a", "b"];
  }
  append(element) {
    let memory = [...this.dataLetters];

    this.dataLetters = memory.concat(element);
  }
  print() {
    let memory = null;
    for (let i = 0; i < this.dataLetters.length; i++) {
      memory += `${this.dataLetters[i]}`;
    }
    return console.log(memory);
  }
}

let letter = new LetterStore();
letter.append(["h", "o", "l", "a"]);
letter.append([" ", "bb"]);
letter.print();
```

## List A List ADT (Chapter 3)

### 1. Escriba una función que inserte un elemento en una lista solo si el elemento que se insertará es más grande que cualquiera de los elementos actualmente en la lista. Más grande puede significar mayor que cuando se trabaja con valores numéricos, o más abajo en el alfabeto, cuando se trabaja con valores textuales

```js
class List {
  constructor() {
    this.dataList = [];
  }
  append(element) {
    this.dataList = [...element];
  }
  insert(element) {
    if (this.validation(element)) {
      return (this.dataList[this.dataList.length] = element);
    }
  }
  validation(element) {
    // return this.dataList.every((x) => {
    //     console.log(x);
    //   element > x;
    // });
    for (let i = 0; i < this.dataList.length; i++) {
      if (element < this.dataList[i]) {
        return false;
      }
    }
    return true;
  }
  print() {
    if (this.dataList.includes(/[aA-zZ]/)) this.dataList.sort();
    else this.dataList.sort((a, b) => a - b);
    return console.log(this.dataList);
  }
}

let alphabet = new List();
alphabet.append(["a", "b", "c", "d", "o", "i"]);
alphabet.insert("z");
alphabet.print();
let number = new List();
number.append([1, 3, 20, 0, 80]);
number.insert("90");
number.print();
```

### 2. Escriba una función que inserte un elemento en una lista solo si el elemento a insertar es más pequeño que cualquiera de los elementos actualmente en la lista

```js
class List {
  constructor() {
    this.dataList = [];
  }
  append(element) {
    this.dataList = [...element];
  }
  insert(element) {
    if (this.validation(element)) {
      return (this.dataList[this.dataList.length] = element);
    }
  }
  validation(element) {
    // return this.dataList.every((x) => {
    //     console.log(x);
    //   element > x;
    // });
    for (let i = 0; i < this.dataList.length; i++) {
      if (element > this.dataList[i]) {
        console.log(i);
        return false;
      }
    }
    return true;
  }
  print() {
    return console.log(this.dataList);
  }
}

let alphabet = new List();
alphabet.append(["b", "c", "d", "o", "i"]);
alphabet.insert("a");
alphabet.print();
let number = new List();
number.append([3, 20, 5, 80]);
number.insert("1");
number.print();
```

### 3. Cree una clase Persona que almacene el nombre de una persona y su género. Cree una lista de al menos 10 objetos Person . Escribe una función que muestre a todas las personas en la lista del mismo género

```js
class Person {
  constructor() {
    this.dataGender = [];
    this.dataMen = [];
    this.dataWomen = [];
    this.dataRandomGender = [];
  }
  append(element) {
    return (this.dataGender[this.dataGender.length] = element);
  }
  evalGender() {
    for (let i = 0; i < this.dataGender.length; i++) {
      if (this.dataGender[i][1] === "Men")
        this.dataMen[this.dataMen.length] = this.dataGender[i][0];
      else if (this.dataGender[i][1] === "Women")
        this.dataWomen[this.dataWomen.length] = this.dataGender[i][0];
      else
        this.dataRandomGender[this.dataRandomGender.length] =
          this.dataGender[i][0];
    }
  }
  printListMen() {
    console.log(this.dataMen);
  }
  printListWomen() {
    console.log(this.dataWomen);
  }
  printListRadomGender() {
    console.log(this.dataRandomGender);
  }
}

let workPerson = new Person();
workPerson.append(["Ale", "Men"]);
workPerson.append(["Luis", "Men"]);
workPerson.append(["Jose", "Men"]);
workPerson.append(["Maria", "Women"]);
workPerson.append(["Laura", "Women"]);
workPerson.append(["Yuquita", "Women"]);
workPerson.append(["Karen", "Women"]);
workPerson.append(["Aaron", "Gay"]);
workPerson.evalGender();
workPerson.printListMen();
workPerson.printListWomen();
workPerson.printListRadomGender();
```

### 4. Modifique el programa de quiosco de alquiler de videos para que cuando se presta una película, se agregue a una lista de películas alquiladas. Muestre esta lista cada vez que un cliente vea una película

```js
class List {
  constructor() {
    this.dataStore = [];
    // this.listSize = 0;
    this.pos = 0;
  }
  append(element) {
    return (this.dataStore[this.dataStore.length] = element);
  }
  find(element) {
    function findElement(e, index) {
      if (e === element) {
        return index;
      }
    }
    return this.dataStore.findIndex(findElement);
  }
  remove(element) {
    let foundAt = this.find(element);
    if (foundAt !== -1) {
      this.dataStore.splice(foundAt, 1);
      return true;
    }
    return false;
  }
  toString() {
    return this.dataStore;
  }
  insert(element, position) {
    return this.dataStore.splice(position, 0, element);
  }
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.pos = 0;
  }
  contains(element) {
    if (this.find(element) !== -1) {
      return true;
    }
    return false;
  }
  front() {
    return (this.pos = 0);
  }
  end() {
    return (this.pos = this.dataStore.length - 1);
  }
  prev() {
    class List {
      constructor() {
        this.dataStore = [];
        // this.listSize = 0;
        this.pos = 0;
      }
      append(element) {
        return (this.dataStore[this.dataStore.length] = element);
      }
      find(element) {
        function findElement(e, index) {
          if (e === element) {
            return index;
          }
        }
        return this.dataStore.findIndex(findElement);
      }
      remove(element) {
        let foundAt = this.find(element);
        if (foundAt !== -1) {
          this.dataStore.splice(foundAt, 1);
          return true;
        }
        return false;
      }
      toString() {
        return this.dataStore;
      }
      insert(element, position) {
        return this.dataStore.splice(position, 0, element);
      }
      clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.pos = 0;
      }
      contains(element) {
        if (this.find(element) !== -1) {
          return true;
        }
        return false;
      }
      front() {
        return (this.pos = 0);
      }
      end() {
        return (this.pos = this.dataStore.length - 1);
      }
      prev() {
        // if (this.pos > 0) {
        return this.pos--;
        // }
      }
      next() {
        // if (this.pos < this.dataStore.length - 1) {
        return this.pos++;
        // }
      }
      curr() {
        return this.pos;
      }
      moveTo(position) {
        return (this.pos = position);
      }
      getElement() {
        return this.dataStore[this.pos];
      }
      length() {
        return this.dataStore.length;
      }
      displayList() {
        for (this.front(); this.curr() < this.length(); this.next())
          console.log(this.getElement());
      }
    }

    class Customer {
      constructor(name, movie) {
        this.name = name;
        this.movie = movie;
      }
    }

    let movies = [
      "The Shawshank Redemption",
      "The Godfather",
      "The Godfather: Part II",
      "Pulp Fiction",
      "The Good, the Bad and the Ugly",
      "12 Angry Men",
      "Schindler's List",
      "The Dark Knight",
      "The Lord of the Rings: The Return of the King",
      "Fight Club",
      "Star Wars: Episode V - The Empire Strikes Back",
      "One Flew Over the Cuckoo's Nest",
      "The Lord of the Rings: The Fellowship of the Ring",
      "Inception",
      "Goodfellas",
      "Star Wars",
      "Seven Samurai",
      "The Matrix",
      "Forrest Gump",
      "City of God",
    ];

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
    for (let i = 0; i < movies.length; i++) {
      moviesList.append(movies[i]);
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
    checkOut("Pedro", movie, moviesList, customers, rentedMoviesList);
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
    // if (this.pos > 0) {
    return this.pos--;
    // }
  }
  next() {
    // if (this.pos < this.dataStore.length - 1) {
    return this.pos++;
    // }
  }
  curr() {
    return this.pos;
  }
  moveTo(position) {
    return (this.pos = position);
  }
  getElement() {
    return this.dataStore[this.pos];
  }
  length() {
    return this.dataStore.length;
  }
  displayList() {
    for (this.front(); this.curr() < this.length(); this.next())
      console.log(this.getElement());
  }
}

class Customer {
  constructor(name, movie) {
    this.name = name;
    this.movie = movie;
  }
}

let movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "Pulp Fiction",
  "The Good, the Bad and the Ugly",
  "12 Angry Men",
  "Schindler's List",
  "The Dark Knight",
  "The Lord of the Rings: The Return of the King",
  "Fight Club",
  "Star Wars: Episode V - The Empire Strikes Back",
  "One Flew Over the Cuckoo's Nest",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Inception",
  "Goodfellas",
  "Star Wars",
  "Seven Samurai",
  "The Matrix",
  "Forrest Gump",
  "City of God",
];

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

let moviesList = new List();
let customers = new List();
let rentedMoviesList = new List();
for (let i = 0; i < movies.length; i++) {
  moviesList.append(movies[i]);
}
console.log("Available movies: \n");
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
// checkOut("Pedro", movie, moviesList, customers, rentedMoviesList);
checkOut("Juan", "Goodfellas", moviesList, customers, rentedMoviesList);
console.log("\nCustomer Rentals: \n");
customers.displayList();
console.log("\nMovies now Available:\n");
moviesList.displayList();
console.log("\nNot Available movies:");
rentedMoviesList.displayList();
```

### 5. Cree una función de registro para el programa de quiosco de alquiler de videos para que las películas devueltas se eliminen de la lista de películas alquiladas y se vuelvan a agregar a la lista de películas disponibles

```js
class List {
  constructor() {
    this.dataStore = [];
    // this.listSize = 0;
    this.pos = 0;
  }
  append(element) {
    return (this.dataStore[this.dataStore.length] = element);
  }
  find(element) {
    function findElement(e, index) {
      if (e === element) {
        return index;
      }
    }
    return this.dataStore.findIndex(findElement);
  }
  remove(element) {
    let foundAt = this.find(element);
    if (foundAt !== -1) {
      this.dataStore.splice(foundAt, 1);
      return true;
    }
    return false;
  }
  toString() {
    return this.dataStore;
  }
  insert(element, position) {
    return this.dataStore.splice(position, 0, element);
  }
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.pos = 0;
  }
  contains(element) {
    if (this.find(element) !== -1) {
      return true;
    }
    return false;
  }
  front() {
    return (this.pos = 0);
  }
  end() {
    return (this.pos = this.dataStore.length - 1);
  }
  prev() {
    // if (this.pos > 0) {
    return this.pos--;
    // }
  }
  next() {
    // if (this.pos < this.dataStore.length - 1) {
    return this.pos++;
    // }
  }
  curr() {
    return this.pos;
  }
  moveTo(position) {
    return (this.pos = position);
  }
  getElement() {
    return this.dataStore[this.pos];
  }
  length() {
    return this.dataStore.length;
  }
  displayList() {
    for (this.front(); this.curr() < this.length(); this.next())
      console.log(this.getElement());
  }
}

class Customer {
  constructor(name, movie) {
    this.name = name;
    this.movie = movie;
  }
}

let movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "Pulp Fiction",
  "The Good, the Bad and the Ugly",
  "12 Angry Men",
  "Schindler's List",
  "The Dark Knight",
  "The Lord of the Rings: The Return of the King",
  "Fight Club",
  "Star Wars: Episode V - The Empire Strikes Back",
  "One Flew Over the Cuckoo's Nest",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Inception",
  "Goodfellas",
  "Star Wars",
  "Seven Samurai",
  "The Matrix",
  "Forrest Gump",
  "City of God",
];

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
for (let i = 0; i < movies.length; i++) {
  moviesList.append(movies[i]);
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
checkOut("Pedro", movie, moviesList, customers, rentedMoviesList);
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
```

## Stack (Charter 4)

El ultimo en entrar es el primero en salir.

```js
class Stack {
  constructor() {
    this.dataStore = [];
  }
  pop() {
    return this.dataStore.pop();
  }
  push(element) {
    return this.dataStore.push(element);
  }
  length() {
    return this.dataStore.length;
  }
}
function mulBase(num, base) {
  let s = new Stack();
  let converted = "";
  do {
    s.push(num % base);
    num = Math.floor(num / base);
  } while (num > 0);
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

let num = 32;
let base = 2;
console.log(mulBase(num, base));
```

### Pilas de reucursion de demostracion

### 1. Se puede usar una pila para garantizar que una expresión aritmética tenga paréntesis equilibrados. Escribe una función que tome una expresión aritmética como argumento y devuelva la posición en la expresión donde falta un paréntesis. Un ejemplo de una expresión aritmética con paréntesis no balanceados es 2.3 + 23 / 12 + (3.14159\*.24

```js
class Stack {
  constructor() {
    this.dataStore = [];
  }
  push(element) {
    return this.dataStore.push(element);
  }
  pop() {
    return this.dataStore.pop();
  }
  length() {
    return this.dataStore.length;
  }
}

function detectedParent(operation) {
  let s = new Stack();
  let lastPosition = null;
  let boolean = null;
  let BRACKETS = {
    ")": () => {
      if (s.dataStore[s.length() - 1][0] === "(") return s.pop();
      else if (s.dataStore[s.length() - 1] === undefined) return lastPosition;
    },

    "]": () => {
      if (s.dataStore[s.length() - 1][0] === "[") return s.pop();
      else if (s.dataStore[s.length() - 1] === undefined) return lastPosition;
    },

    "}": () => {
      if (s.dataStore[s.length() - 1][0] === "{") return s.pop();
      else if (s.dataStore[s.length() - 1][0] === undefined)
        return lastPosition;
    },
  };

  for (let i = 0; i < operation.length; i++) {
    if ("(" === operation[i] || "[" === operation[i] || "{" === operation[i]) {
      s.push([operation[i], i]);
      lastPosition = i;
    } else if (
      ")" === operation[i] ||
      "]" === operation[i] ||
      "}" === operation[i]
    ) {
      if (s.dataStore[0] === undefined)
        return `The bracket of aperture is in position ${lastPosition}`;
      boolean = BRACKETS[operation[i]]();
      if (!boolean) return i;
    }
  }
  return boolean ? true : operation.length;
}
console.log(detectedParent("2.3+23/12+{[(3.14159*.24)]}")); //true
console.log(detectedParent("2.3+23/12+(3.14159*.24")); //false
console.log(detectedParent("((hello))")); //true
console.log(detectedParent("((=102))))")); //false
console.log(detectedParent("(((({(({hal))=102))))")); //false
console.log(
  detectedParent(
    "(((({(({hafadfa)))}}}{{{}}}}}{[][][]]]]]]]](((((((((((al))=102))))"
  )
); //false
```

### 2. Un evaluador de expresiones postfix trabaja en expresiones aritméticas tomando las siguientes. Formulario: op1 op2 operator. Utilizando dos pilas, una para los operandos y otra para los operadores, diseñe e implemente una función de JavaScript que convierta expresiones infijas en expresiones postfijas, y luego use las pilas para evaluar la expresión

```js
class Stack {
  constructor() {
    this.dataStore = [];
  }
  push(element) {
    return this.dataStore.push(element);
  }
  pop() {
    return this.dataStore.pop();
  }
  length() {
    return this.dataStore.length;
  }
}

function eval(numOne, numTwo, op) {
  let OPERATIONS = {
    "*": parseInt(numOne) * parseInt(numTwo),
    "+": parseInt(numOne) + parseInt(numTwo),
    "-": parseInt(numOne) - parseInt(numTwo),
    "/": parseInt(numOne) / parseInt(numTwo),
  };
  return OPERATIONS[op];
}

function calculate(operation) {
  let OPERATORS = {
    "*": true,
    "/": true,
    "+": true,
    "-": true,
  };
  let i = 0;
  let application = 0;
  do {
    if (OPERATORS[operation[i]]) {
      let application = eval(operation[i - 1], operation[i - 2], operation[i]);
      operation.splice(i - 2, 3, application);
      i = operation.length > 3 ? 3 : 2;
    } else i++;
  } while (operation.length > 3);
  application = eval(operation[i - 1], operation[i - 2], operation[i]);
  operation.splice(i - 2, 3, application);

  return operation;
}
function infixesToPostfixed(operation) {
  let arrNumOpe = operation.split(/[+\(\)\-*\[\]]/).filter((e) => e !== "");
  let arrOperating = operation.replace(/[0-9]/g, "").split("");
  let operator = new Stack();
  let result = [];
  let index = 0;
  let regroup = null;
  let BRACKETS = {
    ")": "(",
    "]": "[",
    "}": "}",
  };
  for (let i = 0; i < arrOperating.length; i++) {
    if (BRACKETS[arrOperating[i]]) {
      index = operator.dataStore.indexOf(BRACKETS[arrOperating[i]]);
      regroup = operator.dataStore.splice(index + 1, operator.length());
      operator.dataStore.splice(index, 1);
      result.push(...regroup);
      result.push(arrNumOpe[i]);
    } else {
      operator.push(arrOperating[i]);
      result.push(arrNumOpe[i]);
    }
  }

  result.push(...operator.dataStore.reverse());
  return calculate(result.filter((e) => e !== undefined));
}
a = ["10+(1+2)*2", "10+(1+2-1)*2", "[1*(2-3)]+(4+5)"];
console.log(infixesToPostfixed(a[2]));
```

### 3. Un ejemplo de una pila del mundo real es un dispensador de Pez. Imagina que tu dispensador virtual de Pez está lleno de colores rojo, amarillo y blanco y no te gustan los amarillos. Escribe un programa que use una pila (y tal vez más de una) para quitar los dulces amarillos sin cambiar el orden de los otros dulces en el dispensador

```js
class Stack {
  constructor() {
    this.dataStore = [];
  }
  push = (e) => this.dataStore.push(e);
  pop = () => this.dataStore.pop();
}

function filterDispenser(dispenser) {
  let COLORS_DISPENSER = {
    yellow: true,
    // red: true,
    // white: true,
  };
  let filterYellow = new Stack();
  for (let i = 0; i < dispenser.length; i++) {
    if (!COLORS_DISPENSER[dispenser[i]]) filterYellow.push(dispenser[i]);
  }
  return filterYellow.dataStore;
}

console.log(
  filterDispenser([
    "yellow",
    "red",
    "white",
    "yellow",
    "white",
    "red",
    "yellow",
    "red",
  ])
);
```

## Queue (Charter 5)

### 1. Modifique la clase Queue para crear una clase Dequeue. Una dequeue es una estructura similar a una cola que permite agregar y eliminar elementos tanto del frente como del final de la lista. Pon a prueba tu clase en un programa

```JS
const { Queue } = require("../../lib/Queue");
const fs = require("fs");
const data = fs
  .readFileSync("exercise/queue/dancers.txt", {
    encoding: "utf-8",
  })
  .split("\r\n");

class Dequeue extends Queue {
  frontEnqueue(e) {
    this.dataStore.unshift(e);
  }
  backDequeue() {
    return this.dataStore.pop();
  }
}

const dancers = new Dequeue();
for (let i = 0; i < data.length; i++) {
  if (i > 7) {
    dancers.firstEnqueue(data[i]);
  } else dancers.enqueue(data[i]);
}
console.log(dancers);
dancers.lastDequeue();
console.log(dancers);
dancers.dequeue();
console.log(dancers);
```

### 2. Use la clase Dequeue que creó en el ejemplo 5-1 para determinar si una palabra dada es una palindromo

```JS
const { Queue } = require("../../lib/Queue");

const test = [
  "A man, a plan, a canal. Panama",
  "A man, a plan, a canal: Panama",
  "rosa",
];

function isPalindrome(str) {
  const r = /[\W]/g;
  const lowRegStr = str.toLowerCase().replace(r, "");
  const reversedArr = new Queue();
  const rightArr = new Queue();

  for (let i = 0; i < lowRegStr.length; i++) {
    reversedArr.frontEnqueue(lowRegStr[i]);
    rightArr.enqueue(lowRegStr[i]);
  }

  return reversedArr.dataStore.toString() === rightArr.dataStore.toString();
}
console.log(isPalindrome(test[2]));

```

### 3. Modifique el ejemplo de ED (ejemplo 5-5) para que el usuario pueda controlar la actividad en el ED. Cree un sistema de menús que permita al usuario elegir entre las siguientes actividades:a. El paciente ingresa al servicio de urgencias, b. El médico ve al paciente, c. Mostrar lista de pacientes en espera de ser atendidos

```JS
const { PriorityQueue } = require("../../lib/PriorityQueue");
const prompt = require("prompt-sync")();

function hospitalEDSystem() {
  let noExit = true;
  const patients = new PriorityQueue();
  const REQUEST = {
    1: () => addPatient(patients),
    2: () => nexPatient(patients),
    3: () => currentPatient(patients),
    4: () => (noExit = false),
  };
  while (noExit) {
    let question = prompt(
      "Choose a number for your operation " +
        "\n" +
        "1: Patient enters ED." +
        "\n" +
        "2: Patient is seen by doctor." +
        "\n" +
        "3: Display list of patient waiting to be seen." +
        "\n" +
        "4: Exit" +
        "\n"
    );
    if (REQUEST[question]) REQUEST[question]();
    else console.log("Your option is not valid. Try again");
  }
}

function addPatient(patients) {
  const name = prompt("Enter the name of the patient: ");
  const code = prompt("Enter the patient's priority code: ");
  patients.enqueue({
    name: name,
    code: code,
  });
}

function currentPatient(patients) {
  if (patients.count() > 0)
    console.log("Patients waiting to be seen:"),
      console.log(patients.toStringPriority());
  else console.log("there's no patients to be seen");
}

function nexPatient(patients) {
  if (patients.count() > 0) {
    let seen = patients.dequeueWithPriority();
    console.log("Patient being treated: " + seen[0].name);
  } else console.log("There's no patient being treated");
}

hospitalEDSystem();

```

## Linked List (Charter 6)

```js
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) currNode = currNode.next;
    return currNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  display() {
    let currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  findPrevious(item) {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    let prevNode = this.findPrevious(item);
    if (prevNode.next !== null) prevNode.next = prevNode.next.next;
  }
}

// main program

let cities = new LList();
cities.insert("conway", "head");
cities.insert("russellville", "conway");
cities.insert("alma", "russellville");
cities.display();
```

## Doubly Linked List

```JS
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) currNode = currNode.next;
    return currNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
  }

  remove(item) {
    let currNode = this.find(item);
    if (currNode.next !== null) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
  }

  findLast() {
    let currNode = this.head;
    while (currNode.next !== null) currNode = currNode.next;
    return currNode;
  }

  dispReverse() {
    let currNode = this.head;
    currNode = this.findLast();
    while (currNode.previous !== null) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }

  display() {
    let currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
}

let cities = new DoublyLinkedList();
cities.insert("conway", "head");
cities.insert("russellville", "conway");
cities.insert("carlisle", "russellville");
cities.insert("alma", "carlisle");
cities.display();
console.log();
cities.remove("carlisle");
cities.display();
console.log();
cities.dispReverse();
```

## Circularly Linked List

```JS
class Node {
  constructor(element) {
    this.element = element;
    this.next = null 
  }
}
class CircularlyLinkedList {
  constructor() {
    this.head = new Node("head");
    this.head.next = this.head;
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) currNode = currNode.next;
    return currNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  display() {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== "head") {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  findPrevious(item) {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    let prevNode = this.findPrevious(item);
    if (prevNode.next !== null) prevNode.next = prevNode.next.next;
  }
}
```

### 1. Implementar la función de avance (n) para que cuando se ejecute, el nodo actual sea moviodo a _n_ nodos hacia adelante en la lista

````JS
// Para incorporarlo al method
    advance(n, item) {
    let currNode = this.find(item);
    let count = 0;
    while (currNode.next !== null && count < n) {
      currNode = currNode.next;
      count++;
    }
    return count < n
      ? `Exceeds the traversal of the linked list, this is the last value of the list: ${currNode.element}`
      : currNode.element;
  }
```

### 2. Implemente la función _back(n)_ para que cuando se ejecute, el nodo actual se mueva _n_ espacios hacia atrás en la lista

### 3. Implementa la función _show()_, que muesta los datos asociados con el actual nodo

## 4. Escriba un programa que utilice una lista de enlaces simples para realizar un seguimiento de un conjunto de calificaciones de prueba ingresadas de forma interactiva en el programa

## 5. Reescribe tu solución al _ejemplo 6-4_ usando una lista doblemente enlazada

## 6. Según la lenyenda, el historiador judío de primer siglo, Flavio Josefo, estuvo a punto de ser capturado junto con una banda de 4- compatriotas por soldados romanos durante la guerra judeo-romana. Los soldados judios decidieron que preferian suicidarse a ser capturados e idearon un plan para su desaparición. Debían formar un círculo y matar a uno de cada tres soldados hasta que estuvieran todos muertos. Josephus y uno más decidieron que no querían saber nada de esto y rápidamente calcularon dónde debían ubicarse para ser los últimos sobrevivientes. Escriba un programa que le permita conolocar a _n_ personas en un circulo y especifique que cada _m-ésima_ persona será asesinada. El programa debe determinar el número de las dos ultimas personas que quedan en el circulo. Usa una lista enlazada circularmente para resolver el problema
````
