class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export default class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.size = 0
  }

  push(value) {
    const pushNode = new Node(value)
    if (this.size === 0) {
      this.top = pushNode
      this.bottom = pushNode
    } else {
      const originTopNode = this.top
      this.top = pushNode
      this.top.next = originTopNode
    }
    this.size += 1
    return this
  }

  pop() {
    const originTopNode = this.top
    if (!originTopNode) {
      return null
    }

    if (this.top === this.bottom) {
      this.bottom = null
    }

    this.top = originTopNode.next
    this.size -= 1

    return originTopNode.value
  }

  peek() {
    return this.top ? this.top.value : null
  }

  getSize() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  clear() {
    this.top = null
    this.bottom = null
    this.size = 0
  }
}
