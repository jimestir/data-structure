const { Queue } = require("./Queue");

class PriorityQueue extends Queue {
  toStringPriority() {
    let reStr = "";
    for (let i = 0; i < this.dataStore.length; i++) {
      reStr += `\nname: ${this.dataStore[i].name} | code: ${this.dataStore[i].code}\n`;
    }
    return reStr;
  }
  dequeueWithPriority() {
    let priority = this.dataStore[0].code;
    let indexPriority = null;
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i].code < priority) {
        priority = this.dataStore[i].code;
        indexPriority = i;
      }
    }
    return this.dataStore.splice(indexPriority, 1);
  }
}
module.exports = {
  PriorityQueue,
};
