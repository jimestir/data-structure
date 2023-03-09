const { Queue } = require("../../lib/Queue");

function distribute(numbs, queues, n, digit) {
  for (let i = 0; i < n; i++) {
    if (digit === 1) queues[numbs[i] % 10].enqueue(numbs[i]);
    else queues[Math.floor(numbs[i] / 10)].enqueue(numbs[i]);
  }
}

function collect(queues, numbs) {
  let i = 0;
  for (let digit = 0; digit < 10; digit++) {
    while (!queues[digit].empty()) numbs[i++] = queues[digit].dequeue();
  }
}

function dispArray(arr) {
  for (let i = 0; i < arr.length; i++) console.log(arr[i] + " ");
}

// main program

let queues = [];
for (let i = 0; i < 10; i++) queues[i] = new Queue();

let numbs = [];
for (let i = 0; i < 10; i++) numbs[i] = Math.floor(Math.random() * 101);

console.log("Before radix sort: ");
dispArray(numbs);
distribute(numbs, queues, 10, 1);
collect(queues, numbs);
distribute(numbs, queues, 10, 10);
collect(queues, numbs);
console.log("\n\nAfter radix sort: ");
dispArray(numbs);
