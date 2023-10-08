import HashTable from '../hash-table'

describe('HashTable', () => {
  it('HashTable: hash function', () => {
    const hashTable = new HashTable()
    expect(hashTable.hash('a')).toBe(17)
    expect(hashTable.hash('b')).toBe(18)
    expect(hashTable.hash('c')).toBe(19)
    expect(hashTable.hash('abc')).toBe(14)
  })

  it('HashTable: get function', () => {
    const hashTable = new HashTable()
    hashTable.set('a', 'apple')
    expect(hashTable.has('a')).toBe(true)
    expect(hashTable.has('b')).toBe(false)
    expect(hashTable.get('b')).toBe(null)
    expect(hashTable.get('a')).toBe('apple')
  })


  it('HashTable: remove function', () => {
    const hashTable = new HashTable()
    hashTable.set('a', 'a')
    expect(hashTable.has('a')).toBe(true)
    expect(hashTable.has('b')).toBe(false)
    hashTable.set('b', 'b')
    expect(hashTable.has('b')).toBe(true)
    hashTable.remove('b')
    expect(hashTable.has('b')).toBe(false)
  })

})
