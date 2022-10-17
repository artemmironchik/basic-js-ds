const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.currentObj = null
    this.head = this.currentObj
    this.length = 0
  }
  getUnderlyingList() {
    this.currentObj = this.head // сетаем текущим объектом голову очереди
    return this.currentObj
  }

  enqueue(value) {
    if(this.currentObj === null) { // если нету элементов в очереди, то создадим его
      this.currentObj = {
        value,
        next: null
      }
      this.head = this.currentObj
      this.length++
      return this
    }

    this.currentObj = this.head
    while(this.currentObj.next) {
      this.currentObj = this.currentObj.next
    }

    this.currentObj.next = new ListNode(value)
    this.length++

    return this
  }

  dequeue() {
    this.currentObj = this.head
    this.head = this.head.next
    this.length--
    return this.currentObj.value
  }
}

module.exports = {
  Queue
};
