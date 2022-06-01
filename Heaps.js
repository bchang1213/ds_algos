/**
 * Heap is a binary tree that is complete.
 * Every level, except the last level (potentially) is completely filled.
 * nodes are filled in from left to right.
 *
 * the value of every node is greater than or equal to its children.
 *
 * There are max heaps. Min Heaps. Where the root nodes
 * and the root nodes to subtrees are either greater than or less than their children.
 *
 * Binary Heaps are binary trees as well.
 *
 * Heaps can be used for sorting data, called heap sort.
 *
 * Heaps are implemented in graph algorithms (shortest path)
 *
 * Influencing priority queues.
 *
 * Finding the kth smallest/largest value.
 *
 * ex:
 * [10, 5, 17, 4, 22]
 * bubbling up example
 *  max heap example
 *    22
 *  17   10
 * 4  5
 *
 * time complexity of bubbling up:
 *  O(log n)
 *
 * in heaps we can only delete the root node, not the inner nodes.
 * removing a value is O(logn)
 *
 * return value of root node to find max or min values in a max or min heap.
 *
 * Because heaps are perfect binary trees, its most efficient to represent them using an array,
 * we can assume they wont have holes.
 */

const Heap = function () {
  this.data = [];
  this.size = 0;

  this.swap = function (index1, index2) {
    let temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  };

  this.makeParent = function (index) {
    return Math.floor((index - 1) / 2);
  };

  this.getLeftChildIndex = function (parentIndex) {
    return parentIndex * 2 + 1;
  };

  this.getRightChildIndex = function (parentIndex) {
    return parentIndex * 2 + 1;
  };

  this.leftChild = function (index) {
    return this.data[this.getLeftChildIndex(index)];
  };

  this.rightChild = function (index) {
    return this.data[this.getRightChildIndex(index)];
  };

  this.isValidParent = function (index) {
    if (!this.hasLeftChild(index)) {
      return true;
    }

    if (!this.hasRightChild(index)) {
      return this.data[index] >= this.leftChild(index);
    }
    return (
      this.data[index] >= this.leftChild(index) &&
      this.data[index] >= this.rightChild(index)
    );
  };

  this.getLargerChildIndex = function (index) {
    if (!this.hasLeftChild(index)) {
      return index;
    }

    if (!this.hasRightChild(index)) {
      return this.getLeftChildIndex(index);
    }

    return this.leftChild(index) > this.rightChild(index)
      ? this.getLeftChildIndex(index)
      : this.getRightChildIndex(index);
  };

  this.hasLeftChild = function (index) {
    return this.getLeftChildIndex(index) <= this.size;
  };

  this.hasRightChild = function (index) {
    return this.getRightChildIndex(index) <= this.size;
  };

  this.bubbleUp = function () {
    //if value > parent, then bubble value up.
    let index = this.size - 1;

    while (index > 0 && this.data[index] > this.data[this.makeParent(index)]) {
      // if the incoming value is bigger than the current parent, then swap em.
      //reset the index to its new index post swap.
      this.swap(index, this.makeParent(index));
      index = this.makeParent(index);
    }
  };

  this.bubbleDown = function () {
    let rootIndex = 0;
    while (rootIndex <= this.size && !this.isValidParent(rootIndex)) {
      //bubble down
      let largerChildIndex = this.getLargerChildIndex(rootIndex);
      this.swap(rootIndex, largerChildIndex);
      rootIndex = largerChildIndex;
    }
  };

  this.insert = function (value) {
    // if is full
    if (this.size < this.data.length) {
      console.log("No more space for additional nodes.");
    }
    this.data[this.size] = value;
    this.size++;

    this.bubbleUp();
  };

  this.remove = function () {
    if (this.size === 0) {
      console.log("There are no nodes in heap. Cannot remove anything.");
    }

    let root = this.data[0];
    this.data[0] = this.data[this.size - 1];
    this.data.pop();
    this.size--;

    this.bubbleDown();

    return root;
  };
};

const newHeap = new Heap();
newHeap.insert(10);
newHeap.insert(5);
newHeap.insert(17);
newHeap.insert(11);
newHeap.insert(6);
//17 is currently the root node
//remove 17
newHeap.remove();
console.log(newHeap);
