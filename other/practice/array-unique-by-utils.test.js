const { uniqueBy } = require('./array-unique-by-utils');

describe('uniqueBy', () => {
  test('should return unique elements based on a primitive property', () => {
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alicia' },
      { id: 3, name: 'Charlie' },
      { id: 2, name: 'Bobby' },
    ];
    const uniqueUsers = uniqueBy(users, (user) => user.id);
    expect(uniqueUsers).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ]);
  });

  test('should return unique elements based on a string property', () => {
    const items = [
      { category: 'A', value: 10 },
      { category: 'B', value: 20 },
      { category: 'A', value: 30 },
      { category: 'C', value: 40 },
    ];
    const uniqueItems = uniqueBy(items, (item) => item.category);
    expect(uniqueItems).toEqual([
      { category: 'A', value: 10 },
      { category: 'B', value: 20 },
      { category: 'C', value: 40 },
    ]);
  });

  test('should handle empty array', () => {
    const arr = [];
    const unique = uniqueBy(arr, (item) => item);
    expect(unique).toEqual([]);
  });

  test('should handle array with all unique elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const unique = uniqueBy(arr, (item) => item);
    expect(unique).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle array with all duplicate elements', () => {
    const arr = [1, 1, 1, 1, 1];
    const unique = uniqueBy(arr, (item) => item);
    expect(unique).toEqual([1]);
  });

  test('should work with custom iteratee function', () => {
    const arr = ['apple', 'banana', 'apricot', 'berry'];
    const unique = uniqueBy(arr, (str) => str.charAt(0)); // Unique by first letter
    expect(unique).toEqual(['apple', 'banana']);
  });
});