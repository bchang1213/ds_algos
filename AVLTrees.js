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
  this.height = 0;
};

function getNodeHeight(node) {
  if (node === null) {
    return -1;
  }
  return node.height;
}

function setNodeHeight(node) {
  node.height =
    Math.max(getNodeHeight(root.left), getNodeHeight(root.right)) + 1;
  return node;
}

function balanceFactor(node) {
  if (node === null) {
    return 0;
  }

  return getNodeHeight(node.left) - getNodeHeight(node.right);
}

function isRightHeavy(node) {
  return balanceFactor(node) < -1;
}

function isLeftHeavy(node) {
  return balanceFactor(node) > 1;
}

function leftRotate(currentNode) {
  newCurrent = currentNode.right;
  currentNode.right = newCurrent.left;
  newCurrent.left = currentNode;

  setNodeHeight(currentNode);
  setNodeHeight(newCurrent);
  return newCurrent;
}

function rightRotate(currentNode) {
  newCurrent = currentNode.left;
  currentNode.left = newCurrent.right;
  newCurrent.right = currentNode;

  setNodeHeight(currentNode);
  setNodeHeight(newCurrent);

  return newCurrent;
}

function balance(current) {
  if (isLeftHeavy(current)) {
    if (balanceFactor(current.left) < 0) {
      //left rotate current.left
      leftRotate(current.left);
    }
    //right rotate current
    return rightRotate(current);
  } else if (isRightHeavy(current)) {
    if (balanceFactor(current.right) > 0) {
      //root.right is right rotated.
      rightRotate(current.right);
    }
    //root is left rotated.
    return leftRotate(current);
  }
  return current;
}

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
    current.height =
      Math.max(getNodeHeight(current.left), getNodeHeight(current.right)) + 1;

    root = balance(root);
    return current;
  };
};

let newTree = new AVLTree();
newTree.insert(newTree.root, 25);
newTree.insert(newTree.root, 21);
newTree.insert(newTree.root, 22);
// newTree.insert(newTree.root, 29);
// newTree.insert(newTree.root, 26);
// newTree.insert(newTree.root, 30);
// newTree.insert(newTree.root, 10);
// newTree.insert(newTree.root, 5);

console.log("STARTING3:", newTree.root);
