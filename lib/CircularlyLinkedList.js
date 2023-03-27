class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class CircularlyLinkedList {
  constructor() {
    this.head = new Node("head");
    this.head.next = this.head;
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
    current.next = newNode;
  }

  display() {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== "head") {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  findPrevious(item) {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    let prevNode = this.findPrevious(item);
    if (prevNode.next !== null) prevNode.next = prevNode.next.next;
  }

  advance(n, item) {
    let currNode = this.find(item);
    let count = 0;
    while (currNode.next !== null && count < n) {
      if (currNode.next.element === "head") currNode = currNode.next;
      currNode = currNode.next;
      count++;
    }
    return count < n
      ? `Exceeds the traversal of the linked list, this is the last value of the list: ${currNode.element}`
      : currNode.element;
  }
}

module.exports = {
  CircularlyLinkedList,
};