const removeAll = require('./array-remove-all');

describe('removeAll', () => {
  test('should remove all occurrences of an element from the array', () => {
    expect(removeAll([1, 2, 3, 2, 4], 2)).toEqual([1, 3, 4]);
  });

  test('should return a new array if the element is not found', () => {
    const originalArr = [1, 2, 3];
    const newArr = removeAll(originalArr, 99);
    expect(newArr).toEqual([1, 2, 3]);
    expect(newArr).not.toBe(originalArr); // Should still return a new array
  });

  test('should return a new array and not modify the original', () => {
    const originalArr = [1, 2, 3, 2];
    const newArr = removeAll(originalArr, 2);
    expect(newArr).toEqual([1, 3]);
    expect(originalArr).toEqual([1, 2, 3, 2]); // Original array should be unchanged
  });

  test('should handle removing from an empty array', () => {
    expect(removeAll([], 1)).toEqual([]);
  });

  test('should handle removing the only element', () => {
    expect(removeAll([1], 1)).toEqual([]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(removeAll([1, 'a', null, 'a'], 'a')).toEqual([1, null]);
  });

  test('should throw an error if the first argument is not an array', () => {
    expect(() => removeAll(null, 1)).toThrow('First argument must be an array.');
    expect(() => removeAll('string', 1)).toThrow('First argument must be an array.');
  });
});
