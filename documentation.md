# Data Structure & Algoritthms with JavaScript

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

```

### 3. Un ejemplo de una pila del mundo real es un dispensador de Pez. Imagina que tu dispensador virtual de Pez está lleno de colores rojo, amarillo y blanco y no te gustan los amarillos. Escribe un programa que use una pila (y tal vez más de una) para quitar los dulces amarillos sin cambiar el orden de los otros dulces en el dispensador

```js

```
