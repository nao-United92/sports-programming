const { findLast } = require('./array-find-last');

describe('findLast', () => {
  test('should return the last even number', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(findLast(arr, (n) => n % 2 === 0)).toBe(6);
  });

  test('should return the last number greater than 5', () => {
    const arr = [1, 8, 3, 5, 9];
    expect(findLast(arr, (n) => n > 5)).toBe(9);
  });

  test('should return undefined if no element satisfies the predicate', () => {
    const arr = [1, 3, 5, 7];
    expect(findLast(arr, (n) => n % 2 === 0)).toBeUndefined();
  });

  test('should work with an array of objects', () => {
    const users = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 25 },
    ];
    const charlie = { name: 'Charlie', age: 25 };
    expect(findLast(users, (u) => u.age === 25)).toEqual(charlie);
  });

  test('should return undefined for an empty array', () => {
    expect(findLast([], (n) => n > 0)).toBeUndefined();
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => findLast('not an array', () => true)).toThrow(TypeError);
  });

  test('should throw an error if the second argument is not a function', () => {
    expect(() => findLast([1, 2, 3], 'not a function')).toThrow(TypeError);
  });
});
