/**
 * Self Balancing trees.
 * AVL Trees - Adelson-Velsky and Landis
 * have a self balancing property. trees rebalance themselves.
 *
 * There is a diff between balanced and unbalanced trees.
 *
 *
 * Rotations are what is used to balance AVL trees.
 * - Left (LL) rotations
 *      a node drops to the left.
 * - Right (RR) rotations
 * - Left-Right (LR) rotations
 * - Right-Left (RL) rotations
 */

const Node = function (value) {
  this.value = value;
  this.right = null;
  this.left = null;
};
const AVLTree = function () {
  this.root = null;

  this.insert = function (current, newValue) {
    let newNode = new Node(newValue);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    if (this.root !== null && current === null) {
      current = newNode;
      return current;
    }
    //these traverse until a suitable insert place
    if (newValue < current.value) {
      current.left = this.insert(current.left, newValue);
    } else if (newValue > current.value) {
      current.right = this.insert(current.right, newValue);
    }
    return current;
  };
};

let newTree = new AVLTree();
newTree.insert(newTree.root, 25);
newTree.insert(newTree.root, 21);
newTree.insert(newTree.root, 22);
newTree.insert(newTree.root, 29);
newTree.insert(newTree.root, 26);
newTree.insert(newTree.root, 30);
newTree.insert(newTree.root, 10);
newTree.insert(newTree.root, 5);

console.log("STARTING3:", newTree.root);
