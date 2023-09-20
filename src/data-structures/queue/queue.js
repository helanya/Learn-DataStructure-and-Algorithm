class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export default class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    return this
  }

  dequeue() {
    if (this.isEmpty()) return

    const dequeueNode = this.head
    this.head = this.head.next

    if (this.head === null) {
      this.tail = null
    }

    return dequeueNode.value
  }

  getFront() {
    if (this.isEmpty()) return 'no head'
    return this.head.value
  }

  isEmpty() {
    return this.head === null
  }
}