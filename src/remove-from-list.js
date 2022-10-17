const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if(l.value === k) l = l.next

  let head = l
  let length = 1
  while(head.next) {
    head = head.next
    length++
  }

  while(indexOf(l, k)) {
    removeAt(indexOf(l, k), l)
  }

  return l
}

function removeAt(pos, list) {  
  let current = list
  let previous = null
  let i = 0
  while (i < pos) {
    previous = current;
    current = current.next;
    i++;
  }

  previous.next = current.next;
  this.length--;
  return current.value;
}

function indexOf(list, element) {
  let current = list
  let i = 0

  while(current) {
    if (current.value === element) {
      return i;
    }

    current = current.next;
    i++;
  }
}

module.exports = {
  removeKFromList
};
