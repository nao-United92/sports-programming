const insertAt = require('./array-insert-at');

describe('insertAt', () => {
  test('should insert an element at a specified index', () => {
    expect(insertAt([1, 2, 4], 2, 3)).toEqual([1, 2, 3, 4]);
  });

  test('should insert an element at the beginning of the array', () => {
    expect(insertAt([2, 3, 4], 0, 1)).toEqual([1, 2, 3, 4]);
  });

  test('should insert an element at the end of the array', () => {
    expect(insertAt([1, 2, 3], 3, 4)).toEqual([1, 2, 3, 4]);
  });

  test('should return a new array and not modify the original', () => {
    const originalArr = [1, 2, 3];
    const newArr = insertAt(originalArr, 1, 99);
    expect(newArr).toEqual([1, 99, 2, 3]);
    expect(originalArr).toEqual([1, 2, 3]); // Original array should be unchanged
  });

  test('should handle inserting into an empty array', () => {
    expect(insertAt([], 0, 1)).toEqual([1]);
  });

  test('should handle inserting multiple times', () => {
    let arr = [1, 3];
    arr = insertAt(arr, 1, 2);
    expect(arr).toEqual([1, 2, 3]);
    arr = insertAt(arr, 0, 0);
    expect(arr).toEqual([0, 1, 2, 3]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => insertAt(null, 0, 1)).toThrow('First argument must be an array.');
    expect(() => insertAt('string', 0, 1)).toThrow('First argument must be an array.');
  });

  test('should throw an error if the index is negative', () => {
    expect(() => insertAt([1, 2], -1, 0)).toThrow('Index is out of bounds.');
  });

  test('should throw an error if the index is greater than array length', () => {
    expect(() => insertAt([1, 2], 3, 0)).toThrow('Index is out of bounds.');
  });
});
