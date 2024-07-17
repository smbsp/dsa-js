// Lecture 83

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let obj = [];
    obj.push(key);
    obj.push(value);
    if (!this.data[this._hash(key)]) {
      this.data[this._hash(key)] = [];
    }
    this.data[this._hash(key)].push(obj);
  }

  get(key) {
    for (let i = 0; i < this.data[this._hash(key)].length; i++) {
      if (this.data[this._hash(key)][i][0] === key) {
        return this.data[this._hash(key)][i][1];
      }
    }
  }

  keys() {
    // O(n) time complexity, in case of Linked List(Without collision) it is O(n^2)
    console.log(this.data);
    let keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 0) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } else {
          keysArray.push(this.data[i][0][0]);
        }
      }
    }
    console.log(keysArray);
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
let grapes = myHashTable.get("grapes");
console.log("element1: ", grapes);
myHashTable.set("apples", 9);
let apples = myHashTable.get("apples");
console.log("element3: ", apples);
myHashTable.set("oranges", 2);
let oranges = myHashTable.get("oranges");
console.log("element3: ", oranges);
myHashTable.keys();
