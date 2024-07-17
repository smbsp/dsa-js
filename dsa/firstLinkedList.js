// Lecture 97

// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    if (this.tail && this.tail.next === null) {
      let obj = {
        value: value,
        next: null,
      };
      this.tail.next = obj;
      this.tail = obj;
      this.length++;
    }
    return this;
  }

  prepend(value) {
    if (this.head && this.head.next !== null) {
      let obj = {
        value: value,
        next: this.head,
      };
      this.head = obj;
      this.length++;
    }
    return this;
  }

  printList() {
    let vals = [];
    let currenthead = this.head;
    while (currenthead !== null) {
      vals.push(currenthead.value);
      currenthead = currenthead.next;
    }
    console.log(vals);
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length - 1) {
      this.append(value);
    } else {
      let currenthead = this.head;
      let nexthead;
      let i = index - 1; // Previous Element
      for (let k = 0; currenthead !== null; k++) {
        if (i === k) {
          nexthead = currenthead.next;
          currenthead.next = {
            value: value,
            next: nexthead,
          };
          this.length++;
          return this;
        } else {
          currenthead = currenthead.next;
        }
      }
    }
  }

  remove(index) {
    let currenthead = this.head;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let nexthead;
      let i = index - 1; // Previous Element
      for (let k = 0; currenthead !== null; k++) {
        if (i === k) {
          nexthead = currenthead.next;
          currenthead.next = nexthead.next;
          this.length--;
          return this;
        } else {
          currenthead = currenthead.next;
        }
      }
    }
  }
}

let myLinkedList = new LinkedList(10);
let ret = myLinkedList.append(5);
// console.log(ret);
ret = myLinkedList.append(16);
// console.log(ret);
ret = myLinkedList.prepend(1);
// console.log(ret);
ret = myLinkedList.insert(1, 7);
// console.log(ret);
ret = myLinkedList.insert(0, 3);
// console.log(ret);
ret = myLinkedList.insert(5, 31);
// console.log(ret);
ret = myLinkedList.insert(3, 14);
// console.log(ret);
// myLinkedList.printList();
myLinkedList.remove(0);
myLinkedList.remove(6);
myLinkedList.printList();
myLinkedList.remove(3);
myLinkedList.printList();
