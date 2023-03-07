const { Stack } = require("../../lib/Stack");

function getMax(operations) {
  const answer = operations.map((e) => e.split(" "));
  const stackOpe = new Stack();
  const stackMax = new Stack();
  const result = [];
  let poppedValue = 0;
  let maxValue = 0;

  const CONDITIONS = {
    1: (value) => {
      stackOpe.push(value);
      if (maxValue <= value) {
        maxValue = value;
        stackMax.push(maxValue);
      }
    },
    2: () => {
      poppedValue = stackOpe.pop();
      if (poppedValue === maxValue) {
        stackMax.pop();
        maxValue = stackMax.peek() || 0;
      }
    },
    3: () => result.push(maxValue),
  };

  answer.forEach((e) => CONDITIONS[e[0]](Number(e[1])));

  return result;
}

let test = [
  "1 72157563",
  "2",
  "1 20",
  "2",
  "1 26",
  "1 28",
  "2",
  "3",
  "1 91",
  "3",
];

console.log(getMax(test));
