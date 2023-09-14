import ListNode from './LinkedListNode'

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const node = new ListNode(value)

    if (this.head === null) {
      this.head = node
      this.tail = node
      return this
    }
    
    this.tail.next = node
    this.tail = node

    return this
  }

  prepend(value) {
    const node = new ListNode(value, this.head)
    this.head = node

    if (this.tail === null) {
      this.tail = node
    }

    return this
  }

  insert(indexValue, value) {
    let index = indexValue
    if (indexValue < 0) {
      index = 0
    }
    
    if (index === 0) {
      return this.prepend(value)
    }

    const node = new ListNode(value)
    let currentIndex = 1
    let currentNode = this.head

    while (currentIndex < index && currentNode !== null) {
      currentIndex += 1
      currentNode = currentNode.next
    }

    if (currentNode) {
      node.next = currentNode.next
      currentNode.next = node
    } else {
      if (this.tail) {
        this.tail.next = node
        this.tail = node
      } else {
        this.tail = node
        this.head = node
      }
    }

    return this
  }

  remove(index) {
    if (!this.head) return
    if (index === 0) {
      this.head = this.head.next
    }

    let currentIndex = 0
    let currentNode = this.head
    
    while (currentNode.next) {
      if (currentIndex + 1 === index) {
        currentNode.next = currentNode.next.next
        return
      }
      currentNode = currentNode.next
      currentIndex += 1
    }

    return this
  }



  toString() {
    const nodes = []
    
    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode.value)
      currentNode = currentNode.next
    }

    return nodes.join(' -> ')
  }
}
