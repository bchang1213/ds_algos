/*

Queues are either FIFO or LILO.

FIFO: First object in is the first to leave the queue.
LILO: Last object in is the Last to leave the queue.

*/

const Queue = function () {
  this.data = [];
  this.size = 0;

  this.enqueue = function (value) {
    this.data.push(value);
    this.size++;
  };

  //remove the data at the beginning of the array
  this.dequeue = function () {
    if (this.data.length === 0) {
      return null;
    }
    this.size--;
    return this.data.shift();
  };
};

const newQueue = new Queue();
newQueue.enqueue(5);
newQueue.enqueue(7);
newQueue.enqueue(8);
newQueue.enqueue(9);
newQueue.dequeue();
console.log("newQueue:", newQueue);
