// Lecture 119

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    // console.log(this.top.value);
    if (!this.top) {
      return undefined;
    } else {
      return this.top.value;
    }
  }

  push(value) {
    let node = new Node(value);
    if (this.length == 0) {
      this.bottom = node;
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.length++;
    // console.log(this);
  }

  pop() {
    if (!this.top) {
      return undefined;
    }
    this.top = this.top.next;
    if (this.length === 1) {
      this.bottom = null;
    }
    this.length--;
    // console.log(this);
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
let ret = myStack.peek();
console.log(ret);
myStack.pop();
ret = myStack.peek();
console.log(ret);
myStack.pop();
ret = myStack.peek();
console.log(ret);
myStack.pop();
ret = myStack.peek();
console.log(ret);
myStack.pop();

//Discord
//Udemy
//google
