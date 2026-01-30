// other/practice/array-mode.test.js
const arrayMode = require('./array-mode');

describe('arrayMode', () => {
  test('should return a single mode for an array with one mode', () => {
    expect(arrayMode([1, 2, 2, 3, 3, 3, 4])).toEqual([3]);
    expect(arrayMode(['a', 'b', 'b', 'c'])).toEqual(['b']);
  });

  test('should return multiple modes for an array with multiple modes', () => {
    expect(arrayMode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
    expect(arrayMode(['apple', 'banana', 'apple', 'orange', 'banana'])).toEqual(['apple', 'banana']);
  });

  test('should return all unique elements if all appear once (no distinct mode)', () => {
    const result = arrayMode([1, 2, 3, 4]).sort((a, b) => a - b); // Sort for consistent test
    expect(result).toEqual([1, 2, 3, 4]);
    const strResult = arrayMode(['a', 'b', 'c']).sort();
    expect(strResult).toEqual(['a', 'b', 'c']);
  });

  test('should return undefined for an empty array', () => {
    expect(arrayMode([])).toBeUndefined();
  });

  test('should handle arrays with a single element', () => {
    expect(arrayMode([7])).toEqual([7]);
  });

  test('should handle mixed data types as modes', () => {
    const result = arrayMode([1, 'a', 1, 'b', 'a']).sort();
    expect(result).toEqual([1, 'a']);
  });

  test('should return undefined for non-array inputs', () => {
    expect(arrayMode(null)).toBeUndefined();
    expect(arrayMode(undefined)).toBeUndefined();
    expect(arrayMode(123)).toBeUndefined();
    expect(arrayMode('string')).toBeUndefined();
    expect(arrayMode({})).toBeUndefined();
  });

  test('should handle arrays with zero and negative numbers', () => {
    expect(arrayMode([-5, 0, 0, 5, 5])).toEqual([0, 5]);
    expect(arrayMode([0, 0, 0])).toEqual([0]);
  });
});
