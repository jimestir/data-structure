const { Stack } = require("../../lib/Stack");

function twoStacks(maxSum, a, b) {
  let staACount = 0;
  let staBCount = 0;
  let totalSum = 0;
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    if (totalSum + a[i] > maxSum) break;
    totalSum += a[i];
    staACount++;
  }

  for (let i = 0; i < b.length; i++) {
    totalSum += b[i];
    staBCount++;
    while (totalSum > maxSum && staACount > 0) {
      totalSum -= a[staACount - 1];
      staACount--;
    }
    result =
      totalSum <= maxSum ? Math.max(result, staACount + staBCount) : result;
  }

  return result;
}

console.log(twoStacks(10, [4, 2, 4, 6, 1], [2, 1, 8, 5]));

// other solution 

// const arr1 = [4, 2, 4, 6, 1];
// const arr2 = [2, 1, 8, 5];
// const stk1 = arrToStack(arr1);
// const stk2 = arrToStack(arr2);

// function twoStacks(maxSum, a, b) {
//   let sum = 0;
//   let counter = 0;
//   let lastNum = 0;
//   let nextNum = 0;
//   while (sum < maxSum) {
//     if (a.peek() < b.peek()) {
//       lastNum = a.peek();
//       sum += a.pop();
//       nextNum = a.peek();
//       if (lastNum + nextNum < maxSum) counter++;
//     } else {
//       lastNum = a.peek();
//       sum += b.pop();
//       nextNum = b.peek();
//       if (lastNum + nextNum < maxSum) counter++;
//     }
//   }
//   return counter;
// }
// console.log(twoStacks(10, stk1, stk2));

// function arrToStack(arr) {
//   let newStk = new Stack();
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newStk.push(arr[i]);
//   }
//   return newStk;
// }
