import Stack from '../stack'

describe('Stack', () => {
  it('stack push function', () => {
    const stack = new Stack()
    expect(stack.peek()).toBeNull()
    expect(stack.getSize()).toBe(0)
    stack.push(1)
    stack.push(2)
    expect(stack.getSize()).toBe(2)
  })

  it('stack pop function', () => {
    const stack = new Stack()
    expect(stack.peek()).toBeNull()
    expect(stack.getSize()).toBe(0)
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.getSize()).toBe(3)
    stack.pop()
    expect(stack.getSize()).toBe(2)
  })

  it('stack peek function', () => {
    const stack = new Stack()
    expect(stack.peek()).toBeNull()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.peek()).toBe(3)
    stack.pop()
    expect(stack.peek()).toBe(2)
  })

  it('stack isEmpty function', () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBe(true)
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
  })

  it('stack getSize function', () => {
    const stack = new Stack()
    expect(stack.getSize()).toBe(0)
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.getSize()).toBe(3)
  })

  it('stack clear function', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.isEmpty()).toBe(false)
    stack.clear()
    expect(stack.isEmpty()).toBe(true)
  })
})