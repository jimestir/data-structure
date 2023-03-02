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
