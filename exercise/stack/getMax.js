const { Stack } = require("../../lib/Stack");

function getMax(operations) {
  const OPE = operations.map((e) => e.split(" "));
  const stackOpe = new Stack();
  const MAX = new Stack();
  const CONDITIONS = {
    1: (e) => stackOpe.push(e),
    2: () => stackOpe.pop(),
    3: () => MAX.push(Math.max(...stackOpe.dataStore)),
  };

  OPE.forEach((e) => CONDITIONS[e[0]](e[1]));

  return MAX.dataStore;
}
console.log(
  getMax(["1 97", "2", "1 20", "2", "1 26", "1 20", "2", "3", "1 91", "3"])
);
