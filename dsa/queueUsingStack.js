// Lecture 125

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
let ret = myQueue.peek();
console.log(ret);
ret = myQueue.enqueue("Joy");
console.log(ret);
ret = myQueue.enqueue("Matt");
console.log(ret);
ret = myQueue.enqueue("Pavel");
console.log(ret);
ret = myQueue.peek();
console.log(ret);
ret = myQueue.dequeue();
console.log(ret);
ret = myQueue.dequeue();
console.log(ret);
ret = myQueue.dequeue();
console.log(ret);
ret = myQueue.peek();
console.log(ret);
