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

  /**
   * Depth and Height of Nodes
   * Depth is 0 from the root. Depth increases as you move toward thru a tree.
   * You count the depth starting from the root, or count the edges until the target node starting from root.
   *
   * Height is opposite of depth.
   * Height starts from the leaf node and you count upwards until the root. Height increases as you count upwards from leaf node.
   * Height starts at 0 and increases as you traverse upward.
   */

  //calculating Height leverages post order traversal
  this.getHeight = function (root) {
    if (root === null) {
      return -1;
    }
    if (root.left === null && root.right === null) {
      return 0;
    }

    return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
  };

  //Calculating the minimum value inside a binary tree, NOT a binary search tree.
  //O(n)
  this.getMin = function (root) {
    console.log("ROOT:", root);

    if (root.left === null && root.right === null) {
      return root.value;
    }

    let left = this.getMin(root.left);
    let right = this.getMin(root.right);

    return Math.min(Math.min(left, right), root.value);
  };

  //In a BST, the left most leaf is the smallest value on the tree.
  // O(log(n))
  this.getMinBST = function (root) {
    if (root === null) {
      return `root has no value`;
    }
    let current = root;
    let previous = null;
    while (current !== null) {
      previous = current;
      current = current.left;
    }
    //after this while loop completes, current will be at the end of the left most child.
    //previous will represent the left most child, before reaching null.
    return previous.value;
  };
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

/*      

    newTree illustration
          25
        /    \
      21      29
     /  \    /  \
    10  22  26  30
   /
  5

*/

//Call Pre Order
// console.log(newTree.preOrder(newTree.root));

//Call In Order
// console.log(newTree.inOrder(newTree.root));

//Call Post Order
// console.log(newTree.postOrder(newTree.root));

// console.log(JSON.stringify(newTree, null, 2));

//Height
// console.log(newTree.getHeight(newTree.root));

//getMin
console.log(newTree.getMinBST(newTree.root));
