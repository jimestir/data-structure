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

function detectedParent(operation) {
  let s = new Stack();
  let lastPosition = null;
  let boolean = null;
  let BRACKETS = {
    ")": () => {
      if (s.dataStore[s.length() - 1][0] === "(") return s.pop();
      else if (s.dataStore[s.length() - 1] === undefined) return lastPosition;
    },

    "]": () => {
      if (s.dataStore[s.length() - 1][0] === "[") return s.pop();
      else if (s.dataStore[s.length() - 1] === undefined) return lastPosition;
    },

    "}": () => {
      if (s.dataStore[s.length() - 1][0] === "{") return s.pop();
      else if (s.dataStore[s.length() - 1][0] === undefined)
        return lastPosition;
    },
  };

  for (let i = 0; i < operation.length; i++) {
    if ("(" === operation[i] || "[" === operation[i] || "{" === operation[i]) {
      s.push([operation[i], i]);
      lastPosition = i;
    } else if (
      ")" === operation[i] ||
      "]" === operation[i] ||
      "}" === operation[i]
    ) {
      if (s.dataStore[0] === undefined)
        return `The bracket of aperture is in position ${lastPosition}`;
      boolean = BRACKETS[operation[i]]();
      if (!boolean) return i;
    }
  }
  return boolean ? true : operation.length;
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
