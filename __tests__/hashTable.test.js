import HashTable from '../src/hash-table.js';

describe('HashTable', () => {
  let hashTable = new HashTable();

  //The after each runs after each test, it essentially resets the hashTable to a default/initial state with an empty array
  afterEach(() => {
    hashTable = new HashTable()
  });

  test('should instantiate a hash with an empty array', () =>{
    expect(hashTable.array).toEqual([]);
  })

  // Key case doesn't matter here since we'll make everything lowercase in our hash function
  test('should return a number representation of a letter', () => {
    expect(hashTable.hash("Alaric")).toEqual(0);
    expect(hashTable.hash("zygorth")).toEqual(25);
  })

  test('should add a keyvalue pair to our hash table', () => {
    hashTable.set("John", "Lead Singer");
    expect(hashTable.array[9]).toEqual([[ "John", "Lead Singer" ]]);
  })

  test('should correctly get a key-value pair from a hash table', () => {
    hashTable.set("John", "Lead Singer");
    hashTable.set("Jane", "Fan of the Beatles");
    expect(hashTable.get("John")).toEqual("Lead Singer");
  })

  test('should return null if the bucket has no values', () => {
    expect(hashTable.get("John")).toEqual(null);
  })

  test('should return null if the bucket does not contain the key we are looking for', () => {
    hashTable.set("John", "Lead Singer");
    hashTable.set("Jane", "Fan of The Beatles");
    expect(hashTable.get("Jim")).toEqual(null);
  });

  test('it should remove a key-value pair from the hash table', () => {
    hashTable.set("John", "Lead Singer");
    hashTable.set("Jane", "Fan of The Beatles");
    hashTable.remove("John");
    expect(hashTable.get("Jane")).toEqual("Fan of The Beatles");
    expect(hashTable.get("John")).toEqual(null);
  });
});