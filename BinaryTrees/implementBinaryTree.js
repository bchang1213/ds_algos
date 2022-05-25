/**
 * Implementing just a plain binary tree
 *
 */

const Node = function (value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

const BinaryTree = function (root = null) {
  this.root = root;

  this.insert = function (newValue) {
    let newNode = new Node(newValue);

    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    let current = this.root;

    while (current != null) {
      if (newValue < current.value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  };

  this.find = function (findValue) {
    let current = this.root;

    while (current !== null) {
      if (findValue === current.value) {
        return current;
      }
      if (findValue < current.value) {
        current = current.left;
      }

      if (findValue > current.value) {
        current = current.right;
      }
    }

    return findValue + " not in tree.";
  };
};

let newTree = new BinaryTree();
newTree.insert(25);
newTree.insert(21);
newTree.insert(26);
newTree.insert(10);
newTree.insert(5);

console.log(newTree.find(27));
