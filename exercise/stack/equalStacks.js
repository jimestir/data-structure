function equalStacks(h1, h2, h3) {
  const H1 = h1;
  const H2 = h2;
  const H3 = h3;

  let sumH1 = H1.reduce((a, b) => a + b, 0);
  let sumH2 = H2.reduce((a, b) => a + b, 0);
  let sumH3 = H3.reduce((a, b) => a + b, 0);
  let areNotEquals = true;
  while (areNotEquals) {
    let min = Math.min(sumH1, sumH2, sumH3);
    if (sumH1 == sumH2 && sumH2 == sumH3) areNotEquals = false;
    if (sumH1 > min) sumH1 -= H1.shift();
    else if (sumH2 > min) sumH2 -= H2.shift();
    else if (sumH3 > min) sumH3 -= H3.shift();
  }
  return sumH1;
}

console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]));
