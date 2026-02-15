const removeFirst = require('./array-remove-first');

describe('removeFirst', () => {
  test('should remove the first occurrence of an element from the array', () => {
    expect(removeFirst([1, 2, 3, 2, 4], 2)).toEqual([1, 3, 2, 4]);
  });

  test('should return a new array if the element is not found', () => {
    const originalArr = [1, 2, 3];
    const newArr = removeFirst(originalArr, 99);
    expect(newArr).toEqual([1, 2, 3]);
    expect(newArr).not.toBe(originalArr); // Should still return a new array
  });

  test('should return a new array and not modify the original', () => {
    const originalArr = [1, 2, 3];
    const newArr = removeFirst(originalArr, 2);
    expect(newArr).toEqual([1, 3]);
    expect(originalArr).toEqual([1, 2, 3]); // Original array should be unchanged
  });

  test('should handle removing from an empty array', () => {
    expect(removeFirst([], 1)).toEqual([]);
  });

  test('should handle removing the first element', () => {
    expect(removeFirst([1, 2, 3], 1)).toEqual([2, 3]);
  });

  test('should handle removing the last element', () => {
    expect(removeFirst([1, 2, 3], 3)).toEqual([1, 2]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(removeFirst([1, 'a', null, 'a'], 'a')).toEqual([1, null, 'a']);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => removeFirst(null, 1)).toThrow('First argument must be an array.');
    expect(() => removeFirst('string', 1)).toThrow('First argument must be an array.');
  });
});
