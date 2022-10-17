const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.head = null
    this.stack = []
  }
  push(element) {
    if(!this.head) {
      this.head = element
      this.stack.push(this.head)

      return this
    }

    let previous = this.head
    this.stack.push(element)
    this.head = element

    return this
  }

  pop() {
    if(!this.head) return
    if(this.stack.length === 1) {
      this.stack.pop(this.head)
      this.head = null
    }

    let previous = this.stack[this.stack.length - 2]
    let temp = this.head
    this.stack.pop(this.head)
    this.head = previous

    return temp
  }

  peek() {
    return this.head
  }
}

module.exports = {
  Stack
};
