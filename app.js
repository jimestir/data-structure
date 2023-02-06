class Stack {
  constructor() {
    this.dataStore = ["perro", "gato", "loro"];
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

function detectedParent(operation) {
  let s = new Stack();

  let BRACKETS = {
    ")": () => (s.dataStore[s.length() - 1] === "(" ? s.pop() : false),
    "]": () => (s.dataStore[s.length() - 1] === "[" ? s.pop() : false),
    "}": () => (s.dataStore[s.length() - 1] === "{" ? s.pop() : false),
  };
  let boolean = null;
  for (let i = 0; i < operation.length; i++) {
    if ("(" === operation[i] || "[" === operation[i] || "{" === operation[i]) {
      s.push(operation[i]);
    } else if (
      ")" === operation[i] ||
      "]" === operation[i] ||
      "}" === operation[i]
    ) {
      boolean = BRACKETS[operation[i]]();
      if (!boolean) return false;
    }
  }
  return boolean ? true : false;
}
console.log(detectedParent("2.3+23/12+{[(3.14159*.24)]}")); //true
console.log(detectedParent("2.3+23/12+(3.14159*.24")); //false
console.log(detectedParent("((hello))")); //true
console.log(detectedParent("((=102))))")); //false
console.log(detectedParent("(((({(({hal))=102))))")); //false
console.log(
  detectedParent(
    "(((({(({hafadfa)))}}}{{{}}}}}{[][][]]]]]]]](((((((((((al))=102))))"
  )
); //false
