class Stack {
  constructor() {
    this.dataStore = [];
  }
  push(element) {
    return this.dataStore.push(element);
  }
  pop() {
    return this.dataStore.pop();
  }
  length() {
    return this.dataStore.length;
  }
}

function eval(numOne, numTwo, op) {
  let OPERATIONS = {
    "*": parseInt(numOne) * parseInt(numTwo),
    "+": parseInt(numOne) + parseInt(numTwo),
    "-": parseInt(numOne) - parseInt(numTwo),
    "/": parseInt(numOne) / parseInt(numTwo),
  };
  return OPERATIONS[op];
}

function calculate(operation) {
  let OPERATORS = {
    "*": true,
    "/": true,
    "+": true,
    "-": true,
  };
  let i = 0;
  let application = 0;
  do {
    if (OPERATORS[operation[i]]) {
      let application = eval(operation[i - 1], operation[i - 2], operation[i]);
      operation.splice(i - 2, 3, application);
      i = operation.length > 3 ? 3 : 2;
    } else i++;
  } while (operation.length > 3);
  application = eval(operation[i - 1], operation[i - 2], operation[i]);
  operation.splice(i - 2, 3, application);

  return operation;
}
function infixesToPostfixed(operation) {
  let arrNumOpe = operation.split(/[+(\)\-*]/).filter((e) => e !== "");
  let arrOperating = operation.replace(/[0-9]/g, "").split("");
  let operator = new Stack();
  let result = [];
  let index = 0;
  let regroup = null;
  for (let i = 0; i < arrOperating.length; i++) {
    if (arrOperating[i] === ")") {
      index = operator.dataStore.indexOf("(");
      regroup = operator.dataStore.splice(index + 1, operator.length());
      operator.dataStore.splice(index, 1);
      result.push(...regroup);
      result.push(arrNumOpe[i]);
    } else {
      operator.push(arrOperating[i]);
      result.push(arrNumOpe[i]);
    }
  }

  result.push(...operator.dataStore.reverse());
  return calculate(result.filter((e) => e !== undefined));
}
a = ["10+(1+2)*2", "10+(1+2-1)*2", "[1*(2-3)]+(4+5)"];
console.log(infixesToPostfixed(a[1]));
