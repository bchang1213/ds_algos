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

  /**
   * Depth First Traversal
   *
   * Pre order: root, left, right
   * in-order: left, root, right - on a binary search tree, numbers will come out in ascending order.
   * post-order: left, right, root
   */

  this.preOrder = function (root) {
    console.log("PRE ORDER START");
    if (root === null) {
      return;
    }

    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  };

  this.inOrder = function (root) {
    console.log("IN ORDER START");

    if (root === null) {
      return;
    }

    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  };

  this.postOrder = function (root) {
    console.log("POST ORDER START");

    if (root === null) {
      return;
    }

    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  };

  /**
   * Breadth First Traversal
   * aka Level Order, visit everything at current level before advancing to next level.
   */
};

let newTree = new BinaryTree();
newTree.insert(25);
newTree.insert(21);
newTree.insert(22);
newTree.insert(29);
newTree.insert(26);
newTree.insert(30);
newTree.insert(10);
newTree.insert(5);

//Call Pre Order
// console.log(newTree.preOrder(newTree.root));

//Call In Order
// console.log(newTree.inOrder(newTree.root));

//Call Post Order
console.log(newTree.postOrder(newTree.root));

// console.log(JSON.stringify(newTree, null, 2));
