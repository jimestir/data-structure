const { Queue } = require("../../lib/Queue");
const fs = require("fs");
const dataDancers = fs.readFileSync("exercise/queue/dancers.txt", {
  encoding: "utf-8",
});

class Dancer {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

function getDancers(males, females) {
  let names = dataDancers.split("\n");
  for (let i = 0; i < names.length; i++) names[i] = names[i].trim();
  for (let i = 0; i < names.length; i++) {
    let dancer = names[i].split(" ");
    let sex = dancer[0];
    let name = dancer[1];
    if (sex === "F") females.enqueue(new Dancer(name, sex));
    else males.enqueue(new Dancer(name, sex));
  }
}

function dance(males, females) {
  let person = null;
  console.log("The dance partners are: \n");
  while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    console.log("female dancer is: " + person.name);
    person = males.dequeue();
    console.log(" and the male dancer is: " + person.name);
  }
  console.log();
}

let maleDancers = new Queue();
let femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if (!femaleDancers.empty())
  console.log(femaleDancers.front().name + " is waiting to dance.\n");
if (!maleDancers.empty())
  console.log(maleDancers.front().name + "is waiting to dance.\n");

if (maleDancers.count() > 0)
  console.log(
    "There are " + maleDancers.count() + " male dancers waiting to dance."
  );
if (femaleDancers.count() > 0)
  console.log(
    "There are " + femaleDancers.count() + " female dancers waiting to dance."
  );
