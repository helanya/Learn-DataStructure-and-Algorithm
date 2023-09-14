import LinkedList from "../LinkedList"

describe('LinkedList', () => {
  it('LinkedList: append function', () => {
    const linkedList = new LinkedList()
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
    linkedList.append(1)
    expect(linkedList.head.value).toBe(1)
    expect(linkedList.tail.value).toBe(1)
    expect(linkedList.toString()).toBe('1')
    linkedList.append(2)
    expect(linkedList.toString()).toBe('1 -> 2')
    expect(linkedList.head.value).toBe(1)
    expect(linkedList.tail.value).toBe(2)
  })


  it('LinkedList: prepend function', () => {

    const linkedList = new LinkedList()
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
    linkedList.prepend(1)
    expect(linkedList.head.value).toBe(1)
    expect(linkedList.tail.value).toBe(1)
    expect(linkedList.toString()).toBe('1')
    linkedList.prepend(2)
    expect(linkedList.toString()).toBe('2 -> 1')
    expect(linkedList.head.value).toBe(2)
    expect(linkedList.tail.value).toBe(1)
  })

  it('LinkedList: insert function', () => {
    const linkedList = new LinkedList()
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
    linkedList.insert(2, 3)
    linkedList.insert(2, 4)
    linkedList.insert(0, 1)
    linkedList.insert(-4, 2)
    linkedList.insert(14, 12)
    expect(linkedList.toString()).toBe('2 -> 1 -> 3 -> 4 -> 12')
  })

  it('LinkedList: remove function', () => {
    const linkedList = new LinkedList()
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
    linkedList.append(0)
    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(4)
    linkedList.remove(0)
    expect(linkedList.toString()).toBe('1 -> 2 -> 3 -> 4')
    linkedList.remove(2)
    expect(linkedList.toString()).toBe('1 -> 2 -> 4')
    linkedList.remove(0)
    expect(linkedList.toString()).toBe('2 -> 4')
    linkedList.remove(5)
    expect(linkedList.toString()).toBe('2 -> 4')
  })
})
