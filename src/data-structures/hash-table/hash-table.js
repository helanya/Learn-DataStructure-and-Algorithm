class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

export default class HashTable {
  constructor(size = 20) {
    this.size = size
    this.table = new Array(size)
  }

  hash(key) {
    let hash = Array.from(key).reduce((hashRes, keyStr) => hashRes += keyStr.charCodeAt(0), 0) 

    return hash % this.size
  }

  set(key, value) {
    let hashIndex = this.hash(key)
    let newNode = new Node(key, value)

    if (!this.table[hashIndex]) {
      this.table[hashIndex] = newNode
    } else {
      let currentNode = this.table[hashIndex]
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next= newNode
    }
  }

  get(key) {
    let hashIndex = this.hash(key)
    let currentNode = this.table[hashIndex]


    console.log(currentNode)

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value
      }
      currentNode = currentNode.next
    }
    return null
  }

  remove(key) {
    let hashIndex = this.hash(key)
    let currentNode = this.table[hashIndex]
    let preNode = null

    while (currentNode) {
      if (currentNode.key === key) {
        if (preNode) {
          preNode.next = currentNode.next
        } else {
          this.table[hashIndex] = currentNode.next
        }
        return
      }
      preNode = currentNode
      currentNode = currentNode.next
    }
  }

  has(key) {
    let hashIndex = this.hash(key)
    let currentNode = this.table[hashIndex]

    while (currentNode) {
      if (currentNode.key === key) {
        return true
      }
      currentNode = currentNode.next
    }
    return false
  }
}