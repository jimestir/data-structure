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
