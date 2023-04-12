class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = new Node("head");
    this.elementActually = "";
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) currNode = currNode.next;
    return currNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
  }

  remove(item) {
    let currNode = this.find(item);
    if (currNode.next !== null) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
  }

  findLast() {
    let currNode = this.head;
    while (currNode.next !== null) currNode = currNode.next;
    return currNode;
  }

  dispReverse() {
    let currNode = this.head;
    currNode = this.findLast();
    while (currNode.previous !== null) {
      console.log(currNode.element);
      currNode = currNode.previous;
    }
  }

  display() {
    let currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }
  advance(n, item) {
    let currNode = this.find(item);
    let count = 0;
    while (currNode.next !== null && count < n) {
      currNode = currNode.next;
      count++;
    }

    this.elementActually = currNode.element;

    return count < n
      ? `Exceeds the traversal of the linked list, this is the last value of the list: ${currNode.element}`
      : currNode.element;
  }

  back(n, item) {
    let currNode = this.find(item);
    let count = 0;
    while (currNode.previous !== null && count < n) {
      currNode = currNode.previous;
      count++;
    }

    this.elementActually = currNode.element;

    return count < n || currNode.element === "head"
      ? `Exceeds the traversal of the linked list, this is the last value of the list: ${currNode.element}`
      : currNode.element;
  }

  show() {
    console.log(this.elementActually);
  }
}

module.exports = {
  DoublyLinkedList,
};