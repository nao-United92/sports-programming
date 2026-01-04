const { findDuplicates } = require('./array-find-duplicates-utils');

describe('findDuplicates', () => {
  test('should find duplicate primitive values', () => {
    const arr = [1, 2, 3, 2, 1, 4, 5];
    expect(findDuplicates(arr)).toEqual([2, 1]);
  });

  test('should return an empty array if no duplicates are found', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(findDuplicates(arr)).toEqual([]);
  });

  test('should return an empty array for an empty input array', () => {
    const arr = [];
    expect(findDuplicates(arr)).toEqual([]);
  });

  test('should find duplicates based on an iteratee function for objects (by property)', () => {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alicia' }, // Duplicate id
      { id: 3, name: 'Charlie' },
      { id: 2, name: 'Robert' }, // Duplicate id
    ];
    // Note: The duplicates array will contain the *second* occurrence of the item
    // that created the duplicate key. This is a common behavior for such utilities.
    expect(findDuplicates(users, user => user.id)).toEqual([
      { id: 1, name: 'Alicia' },
      { id: 2, name: 'Robert' },
    ]);
  });

  test('should find duplicates based on an iteratee function for objects (by string value)', () => {
    const items = ['apple', 'banana', 'Apple', 'grape', 'Banana'];
    expect(findDuplicates(items, item => item.toLowerCase())).toEqual(['Apple', 'Banana']);
  });

  test('should handle arrays with multiple occurrences of the same duplicate', () => {
    const arr = [1, 2, 2, 3, 3, 3, 4];
    expect(findDuplicates(arr)).toEqual([2, 3]);
  });

  test('should handle objects with full deep equality (by stringifying)', () => {
    const obj1 = { a: 1, b: 'x' };
    const obj2 = { a: 1, b: 'y' };
    const obj3 = { a: 1, b: 'x' }; // Duplicate of obj1 by value
    const arr = [obj1, obj2, obj3];
    expect(findDuplicates(arr, item => JSON.stringify(item))).toEqual([{ a: 1, b: 'x' }]);
  });
});