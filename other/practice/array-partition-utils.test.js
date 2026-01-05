const arrayPartition = require('./array-partition-utils');

describe('arrayPartition', () => {
  test('should partition an array into two based on a predicate', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const isEven = (num) => num % 2 === 0;
    const [evens, odds] = arrayPartition(arr, isEven);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('should handle an empty array', () => {
    const arr = [];
    const isEven = (num) => num % 2 === 0;
    const [evens, odds] = arrayPartition(arr, isEven);
    expect(evens).toEqual([]);
    expect(odds).toEqual([]);
  });

  test('should handle predicate where all elements pass', () => {
    const arr = [2, 4, 6];
    const isEven = (num) => num % 2 === 0;
    const [evens, odds] = arrayPartition(arr, isEven);
    expect(evens).toEqual([2, 4, 6]);
    expect(odds).toEqual([]);
  });

  test('should handle predicate where no elements pass', () => {
    const arr = [1, 3, 5];
    const isEven = (num) => num % 2 === 0;
    const [evens, odds] = arrayPartition(arr, isEven);
    expect(evens).toEqual([]);
    expect(odds).toEqual([1, 3, 5]);
  });

  test('should pass index and array to the predicate', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const predicate = (char, index) => index % 2 === 0;
    const [evenIndexChars, oddIndexChars] = arrayPartition(arr, predicate);
    expect(evenIndexChars).toEqual(['a', 'c']);
    expect(oddIndexChars).toEqual(['b', 'd']);
  });

  test('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const isEven = (num) => num % 2 === 0;
    arrayPartition(arr, isEven);
    expect(arr).toEqual([1, 2, 3]);
  });

  test('should throw TypeError if first argument is not an array', () => {
    const predicate = (num) => num > 0;
    expect(() => arrayPartition(null, predicate)).toThrow(TypeError);
    expect(() => arrayPartition(123, predicate)).toThrow(TypeError);
    expect(() => arrayPartition('string', predicate)).toThrow(TypeError);
  });

  test('should throw TypeError if second argument is not a function', () => {
    const arr = [1, 2, 3];
    expect(() => arrayPartition(arr, null)).toThrow(TypeError);
    expect(() => arrayPartition(arr, 'string')).toThrow(TypeError);
    expect(() => arrayPartition(arr, 123)).toThrow(TypeError);
  });
});