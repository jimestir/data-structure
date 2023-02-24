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
