const { replaceValue } = require('./array-replace-value-utils');

describe('replaceValue', () => {
  test('should replace all occurrences of oldValue with newValue in a flat array', () => {
    const arr = [1, 2, 3, 2, 4];
    expect(replaceValue(arr, 2, 5)).toEqual([1, 5, 3, 5, 4]);
  });

  test('should not modify the array if oldValue is not found', () => {
    const arr = [1, 2, 3, 4];
    expect(replaceValue(arr, 99, 100)).toEqual([1, 2, 3, 4]);
  });

  test('should handle empty arrays', () => {
    expect(replaceValue([], 1, 2)).toEqual([]);
  });

  test('should handle arrays with mixed data types', () => {
    const arr = [1, 'hello', 2, 'world', 'hello'];
    expect(replaceValue(arr, 'hello', 'hi')).toEqual([1, 'hi', 2, 'world', 'hi']);
  });

  test('should replace null with a new value', () => {
    const arr = [1, null, 2, null];
    expect(replaceValue(arr, null, undefined)).toEqual([1, undefined, 2, undefined]);
  });

  test('should replace undefined with a new value', () => {
    const arr = [1, undefined, 2, undefined];
    expect(replaceValue(arr, undefined, null)).toEqual([1, null, 2, null]);
  });

  test('should handle replacing with the same value', () => {
    const arr = [1, 2, 3];
    expect(replaceValue(arr, 2, 2)).toEqual([1, 2, 3]);
  });

  test('should perform strict equality check for replacement', () => {
    const arr = [1, '2', 3, 2];
    expect(replaceValue(arr, 2, 5)).toEqual([1, '2', 3, 5]);
  });
});
