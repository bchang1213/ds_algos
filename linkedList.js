/*

You can run this page with `node linkedList.js` to view the outcomes of the methods and etc.

*/

const Node = function (value, next = null) {
  this.value = value;
  this.next = next;
};

const LinkedList = function () {
  this.head = null;
  this.size = 0;

  //Linked List methods

  /*This function will add new nodes as the New Head of the linked list.
  previous head value will become the next value of this newly created head.
  that's why the next value for the new Node is this.head.
  because when a node is added for the first time, the head's value will always be null. */
  this.addNodeAtHead = function (value) {
    this.head = new Node(value, this.head);
    this.size++;
    return;
  };

  this.addNodeAtTail = function (value) {
    if (!this.head) {
      return this.addNodeAtHead(value);
    }

    const node = new Node(value);
    let current = this.head;

    //get to the end of the current list, exits if current.next is null
    while (current.next) {
      current = current.next;
    }
    // after the while loop executes, the value of current will be the very last node in the list, thus the next is assignable to current.
    current.next = node;
    this.size++;
    return;
  };

  this.addNodeAt = function (value, index) {
    if (index > 0 && index > this.size) {
      return console.log("Index is out of bounds of size of list.");
    }

    if (index === 0) {
      return this.addNodeAtHead(value);
    }

    const node = new Node(value);
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = node;
    node.next = current;
    this.size++;
    return;
  };

  this.getNodeAtIndex = function (index) {
    if (index > 0 && index > this.size) {
      return console.log("Index is out of bounds of size of list.");
    }
    if (index === 0 && this.head !== null) {
      return this.head;
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      if (count === index) {
        return current.value;
      }
      count++;
      current = current.next;
    }
    return null;
  };

  this.removeNodeAtHead = function () {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
    this.size--;
    return;
  };

  this.removeNodeAtTail = function () {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      return this.removeNodeAtHead();
    }

    let current = this.head;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.size++;
    return;
  };

  this.removeNodeAtIndex = function (index) {
    if (index > 0 && index > this.size) {
      return console.log("Index is out of bounds of size of list.");
    }

    if (index === 0) {
      return this.removeNodeAtHead();
    }

    let count = 0;
    let previous;
    let current = this.head;

    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
    size--;
    return;
  };

  this.reverseList = function () {
    let previous = null;
    let current = this.head;

    while (current.next) {
      //save the current.next to move onto the next node after performing all reverse operations
      let holder = current.next;
      //reverse the next of the current node to whatever is set to previous
      current.next = previous;
      //set previous to the current node, so that the next node might be reversed to this new value of previous.
      previous = current;
      //move onto the next node in the list
      current = holder;
    }

    return;
  };

  this.clearList = function () {
    this.head = null;
    this.size = 0;
    return;
  };

  this.printList = function () {
    let current = this.head;
    while (current.next) {
      console.log(current.value);
      current = current.next;
    }
  };
};

const mergeTwoLinkedLists = function (list1, list2) {
  let firstCount = list1.size;
  let secondCount = list2.size;
};

const firstList = new LinkedList();
const secondList = new LinkedList();

firstList.addNodeAtHead(1);
firstList.addNodeAtHead(2);
firstList.addNodeAtHead(3);
firstList.addNodeAtHead(4);
firstList.addNodeAtHead(5);
firstList.addNodeAtHead(6);
firstList.addNodeAtHead(7);

secondList.addNodeAtHead(1);
secondList.addNodeAtHead(2);
secondList.addNodeAtHead(3);
secondList.addNodeAtHead(4);

mergeTwoLinkedLists(firstList, secondList);
