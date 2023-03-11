class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue(e) {
    this.dataStore.push(e);
  }
  dequeue() {
    return this.dataStore.shift();
  }
  front() {
    return this.dataStore[0];
  }
  back() {
    return this.dataStore[this.dataStore.length - 1];
  }
  toString() {
    let reStr = "";
    for (let i = 0; i < this.dataStore.length; i++) {
      reStr += this.dataStore[i] + "\n";
    }
    return reStr;
  }
  empty() {
    return this.dataStore.length === 0;
  }
  count() {
    return this.dataStore.length;
  }
  frontEnqueue(e) {
    this.dataStore.unshift(e);
  }
  backDequeue() {
    return this.dataStore.pop();
  }
}

module.exports = {
  Queue,
};
