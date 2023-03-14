const { Queue } = require("../../lib/Queue");

function processData(input) {
  const arrInput = input.split("\n");
  const queue = new Queue();
  const result = [];
  const REQUEST = {
    1: (e) => queue.enqueue(e),
    2: () => queue.dequeue(),
    3: () => result.push(Number(queue.dataStore[0])),
  };

  for (let i = 1; i < arrInput.length; i++) {
    let [type, number] = arrInput[i].trim().split(" ");
    if (REQUEST[type]) {
      REQUEST[type](number);
    }
  }
  return result.join("\n");
}

const test =
  "    10\n 1 42 \n    2 \n    1 14  \n   3  \n   1 28  \n   3 \n    1 60  \n   1 78 \n    2  \n   2";

const test1 =
  "    10\n    1 76\n    1 33\n    2\n    1 23\n    1 97\n    1 21\n    3\n    3\n    1 74\n    3\n";
processData(test1);
