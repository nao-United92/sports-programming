const { fill } = require('./array-fill-utils');

describe('fill', () => {
  test('should fill the entire array with a value if no start/end indices are provided', () => {
    expect(fill([1, 2, 3], '*')).toEqual(['*', '*', '*']);
  });

  test('should fill the array from a specified start index', () => {
    expect(fill([1, 2, 3, 4, 5], '*', 2)).toEqual([1, 2, '*', '*', '*']);
  });

  test('should fill the array up to a specified end index', () => {
    expect(fill([1, 2, 3, 4, 5], '*', 0, 2)).toEqual(['*', '*', 3, 4, 5]);
  });

  test('should fill the array within a specified range', () => {
    expect(fill([1, 2, 3, 4, 5], '*', 1, 4)).toEqual([1, '*', '*', '*', 5]);
  });

  test('should not modify the original array', () => {
    const original = [1, 2, 3];
    fill(original, '*');
    expect(original).toEqual([1, 2, 3]);
  });

  test('should handle empty arrays', () => {
    expect(fill([], '*')).toEqual([]);
  });

  test('should handle start/end indices out of bounds gracefully', () => {
    expect(fill([1, 2, 3], '*', -1, 5)).toEqual(['*', '*', '*']);
    expect(fill([1, 2, 3], '*', 1, 1)).toEqual([1, 2, 3]); // No change if start equals end
  });
});