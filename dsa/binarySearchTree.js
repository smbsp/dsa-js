// Lecture 133

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        return this.root;
      } else if (value < currentNode.value) {
        if (value === currentNode.left.value) {
          return currentNode.left;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.value) {
        if (value === currentNode.right.value) {
          return currentNode.right;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        return undefined;
      }
    }
  }

  //     9
  //  4     20
  //1  6  15  170

  remove(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        if (currentNode.left === null && currentNode.right === null) {
          currentNode.value = null;
        } else if (currentNode.left !== null && currentNode.right === null) {
          currentNode.value = currentNode.left.value;
        } else if (currentNode.left === null && currentNode.right !== null) {
          currentNode.value = currentNode.right.value;
        } else {
          let successor = currentNode;
          while (successor) {
            if (currentNode === successor && successor.right) {
              successor = successor.right;
            } else if (currentNode !== successor && successor.left) {
              successor = successor.left;
            } else {
              successor.left = null;
              successor.right = null;
              currentNode.value = successor.value;
              successor.value = null;
              return;
            }
          }
        }
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return undefined;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
let ret = JSON.stringify(traverse(tree.root));
console.log(ret);
// ret = tree.lookup(20);
// console.log(ret);
tree.remove(9);
ret = JSON.stringify(traverse(tree.root));
console.log(ret);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
