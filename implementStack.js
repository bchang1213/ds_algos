/*

Stacks are LIFO or FILO, they mean the same thing.

LIFO: The last item to enter the stack is the first one that is able to leave the stack, OR
FILO : The first item to enter the stack is the last one that is able to leave the stack.

Regardless of which ACRONYM you use, such is the behavior of the stack, it behaves as one would stack a sheet of papers.

*/

const Stack = function () {
  this.data = [];
  this.size = 0;

  this.pushToStack = function (value) {
    this.data.push(value);
    this.size++;
  };

  this.popFromStack = function () {
    if (this.size === 0) {
      return null;
    }
    this.size--;
    return this.data.pop();
  };
};

const newStack = new Stack();
newStack.pushToStack(5);
newStack.pushToStack(7);
newStack.pushToStack(8);
newStack.popFromStack();

console.log("New Stack:", newStack);
