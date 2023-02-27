class List {
  constructor() {
    this.dataStore = [];
    this.pos = 0;
  }
  append(element) {
    return (this.dataStore[this.dataStore.length] = element);
  }
  find(element) {
    function findElement(e, index) {
      if (e === element) {
        return index;
      }
    }
    return this.dataStore.findIndex(findElement);
  }
  remove(element) {
    let foundAt = this.find(element);
    if (foundAt !== -1) {
      this.dataStore.splice(foundAt, 1);
      return true;
    }
    return false;
  }
  toString() {
    return this.dataStore;
  }
  insert(element, position) {
    return this.dataStore.splice(position, 0, element);
  }
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.pos = 0;
  }
  contains(element) {
    if (this.find(element) !== -1) {
      return true;
    }
    return false;
  }
  front() {
    return (this.pos = 0);
  }
  end() {
    return (this.pos = this.dataStore.length - 1);
  }
  prev() {
    if (this.pos > 0) {
      return this.pos--;
    }
  }
  next() {
    if (this.pos < this.dataStore.length - 1) {
      return this.pos++;
    }
  }
  currPos() {
    return this.pos;
  }
  moveTo(position) {
    return (this.pos = position);
  }
  getElement() {
    return this.dataStore[this.pos];
  }
  length() {
    return this.dataStore.length;
  }
  displayList() {
    for (this.front(); this.curr() < this.length(); this.next())
      console.log(this.getElement());
  }
}
module.exports = {
  List,
};
