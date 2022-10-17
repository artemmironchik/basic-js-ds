const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addInside(this.rootNode, data)

    function addInside(node, data) {
      if(!node) return new Node(data) // создаем новый узел, если такого нету

      if(node.data === data) return node // если узел с таким значением есть, то ничего не делаем

      if(data < node.data) node.left = addInside(node.left, data) // если значение нового узла меньше, чем значение текущего, то добавляем слева
      else node.right = addInside(node.right, data) // если больше - справа

      return node
    }
  }

  has(data) {
    return searchInside(this.rootNode, data)

    function searchInside(node, data) {
      if(!node) return false // если такого элемента нету, возвращаем false

      if(node.data === data) return true // если узел с таким значением есть, то вовзращаем true

      // если значение нового узла меньше, чем значение текущего, то ищем слева, если больше - справа
      if(data < node.data) return searchInside(node.left, data)
      else return searchInside(node.right, data)
    }
  }

  find(data) {
    return findInside(this.rootNode, data)

    function findInside(node, data) {
      if(!node) return null // если такого элемента нету, возвращаем null

      if(data === node.data) return node // если узел с таким значением есть, то вовзращаем узел

      // если значение нового узла меньше, чем значение текущего, то ищем слева, если больше - справа
      if(data < node.data) return findInside(node.left, data)
      else return findInside(node.right, data)
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data)

    function removeNode(node, data) {
      if(!node) return null // если такого узла нет, то ничего не удаляем

      if(data < node.data) { 
        node.left = removeNode(node.left, data) // если значение заданного узла меньше текущего, то идем налево
        return node
      } else if (data > node.data) {
        node.right = removeNode(node.right, data) // если больше, то направо
        return node
      } else { // если равно
        if(!node.left && !node.right) return null // если нет потомков, то просто удаляем

        // если есть один из потомков, то просто вместо выбранного узла ставим потомка
        if(!node.left) {
          node = node.right 
          return node
        }

        if(!node.right) {
          node = node.left
          return node
        }

        // если есть оба потомка
        let maxFromLeft = node.left
        while(maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }

        node.data = maxFromLeft.data

        node.left = removeNode(node.left, maxFromLeft.data)

        return node
      }
    }
  }

  min() {
    // if(!this.rootNode) return // если нет элементов, вернем undefined

    // let node = this.rootNode
    // while(node.left) {
    //   node = node.left // ищем самый последний левый узел
    // }

    // return node.data
    return minValue(this.rootNode)

    function minValue(node) {
      if(node.left) return minValue(node.left) // ищем самый последний левый узел
      else return node.data // если самый последний нашли, то возвращаем его значение
    }
  }

  max() {
    return maxValue(this.rootNode)

    function maxValue(node) {
      if(node.right) return maxValue(node.right) // ищем самый последний правый узел
      else return node.data // если самый последний нашли, то возвращаем его значение
    }
  }
}

module.exports = {
  BinarySearchTree
};