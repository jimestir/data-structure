const { Stack } = require("../../lib/Stack");
function pezDispenser(dispenser) {
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
  pezDispenser([
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
