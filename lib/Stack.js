class Stack {
  constructor() {
    this.dataStore = [];
  }
  pop() {
    return this.dataStore.pop();
  }
  push(element) {
    return this.dataStore.push(element);
  }
  length() {
    return this.dataStore.length;
  }
  peek() {
    return this.dataStore[this.dataStore.length - 1];
  }
}
module.exports = {
  Stack,
};
