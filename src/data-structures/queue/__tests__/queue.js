import Queue from '../queue'

describe('Queue', () => {
  it('Queue: isEmpty function', () => {
    const queue = new Queue()
    expect(queue.isEmpty()).toBe(true)
  })

  it('Queue: enqueue function', () => {
    const queue = new Queue()
    queue.enqueue(1)
    expect(queue.head.value).toBe(1)
    expect(queue.tail.value).toBe(1)
    queue.enqueue(2)
    expect(queue.tail.value).toBe(2)
  })

  it('Queue: dequeue function', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.head.value).toBe(1)
    expect(queue.tail.value).toBe(3)
    queue.dequeue()
    expect(queue.head.value).toBe(2)
    expect(queue.tail.value).toBe(3)
  })

  it('Queue: getFront function', () => {
    const queue = new Queue()
    expect(queue.getFront()).toBe('no head')
    queue.enqueue(1)
    expect(queue.getFront()).toBe(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.dequeue()
    expect(queue.getFront()).toBe(2)
  })
})