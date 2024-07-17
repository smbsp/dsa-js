class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  appendNode(newNode) {
    let node = this.head;
    if (node == null) {
      //Means it's just empty list
      this.head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  insertAt(index, newNode) {
    let node = this.head;
    if (index == 0) {
      newNode.next = node;
      this.head = newNode;
      return;
    }
    while (--index) {
      if (node.next !== null) node = node.next;
      else throw Error("Index Out of Bound");
    }
    let tempVal = node.next;
    node.next = newNode;
    newNode.next = tempVal;
  }

  removeFrom(index) {
    let node = this.head;
    if (index === 0) {
      if (node !== null) {
        node = node.next;
        this.head = node;
      } else throw Error("Index Out of Bound");

      return;
    }
    while (--index) {
      if (node.next !== null) node = node.next;
      else throw Error("Index Out of Bound");
    }
    node.next = node.next.next;
  }

  getNode(index) {
    let node = this.head;

    if (index == 0) {
      return this.head;
    }
    while (index--) {
      if (node.next !== null) node = node.next;
      else throw Error("Index Out of Bound");
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    if (currentNode === null) return;

    let nextNode;
    while (currentNode) {
      nextNode = currentNode.next;

      currentNode.next = prevNode;
      prevNode = currentNode;

      currentNode = nextNode;
    }
    this.head = prevNode;
  }

  indexOf(data) {
    let ind = -1;
    let node = this.head;
    while (node) {
      ++ind;
      if (node.data === data) return ind;

      node = node.next;
    }
    return -1;
  }

  isEmpty() {
    return this.head == null;
  }

  listSize() {
    let size = 0;
    let node = this.head;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  printList() {
    let node = this.head;
    process.stdout.write("HEAD->");
    while (node) {
      process.stdout.write(node.data + "->");
      node = node.next;
    }
    console.log("NULL");
  }
}

let myList = new LinkedList();
let node = new Node(5);

myList.appendNode(node);
myList.appendNode(new Node(11));
myList.appendNode(new Node(7));
myList.printList();

myList.removeFrom(2);

myList.printList();
console.log(myList.getNode(1));
console.log(myList.listSize());
