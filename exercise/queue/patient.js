const { Queue } = require("../../lib/Queue");

class Patient {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

function dequeue(e) {
  let priority = e.dataStore[0].code;
  for (let i = 1; i < e.dataStore.length; i++) {
    if (e.dataStore[i].code < priority) priority = i;
  }
  return e.dataStore.splice(priority, 1);
}

function toString(e) {
  let reStr = "";
  for (let i = 0; i < e.dataStore.length; i++) {
    reStr += e.dataStore[i].name + " code: " + e.dataStore[i].code + "\n";
  }
  return reStr;
}

let p = new Patient("Smith", 5);
let ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brow", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(toString(ed));
let seen = dequeue(ed);
console.log("Patient being treated: " + seen[0].name);
console.log("Patient waiting to be seen: ");
console.log(toString(ed));

// another round
seen = dequeue(ed);
console.log("Patient being treated: " + seen[0].name);
console.log("Patient waiting to be seen: ");
console.log(toString(ed));

seen = dequeue(ed);
console.log("Patient being treated: " + seen[0].name);
console.log("Patient waiting to be seen: ");
console.log(toString(ed));
