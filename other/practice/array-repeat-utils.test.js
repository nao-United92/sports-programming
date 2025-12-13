const repeat = require('./array-repeat-utils').default;

describe('repeat', () => {
  test('should repeat the array elements n times', () => {
    const arr = [1, 2];
    expect(repeat(arr, 3)).toEqual([1, 2, 1, 2, 1, 2]);
  });

  test('should return an empty array if n is 0', () => {
    const arr = [1, 2];
    expect(repeat(arr, 0)).toEqual([]);
  });

  test('should return an empty array if n is negative', () => {
    const arr = [1, 2];
    expect(repeat(arr, -1)).toEqual([]);
  });

  test('should return the original array once if n is 1', () => {
    const arr = ['a', 'b', 'c'];
    expect(repeat(arr, 1)).toEqual(['a', 'b', 'c']);
  });

  test('should handle an empty input array', () => {
    const arr = [];
    expect(repeat(arr, 5)).toEqual([]);
  });

  test('should handle an array with a single element', () => {
    const arr = ['x'];
    expect(repeat(arr, 4)).toEqual(['x', 'x', 'x', 'x']);
  });

  test('should return an empty array if the first argument is not an array', () => {
    expect(repeat(null, 3)).toEqual([]);
    expect(repeat(undefined, 3)).toEqual([]);
    expect(repeat('string', 3)).toEqual([]);
    expect(repeat(123, 3)).toEqual([]);
    expect(repeat({}, 3)).toEqual([]);
  });

  test('should not modify the original array', () => {
    const originalArray = [1, 2];
    repeat(originalArray, 2);
    expect(originalArray).toEqual([1, 2]);
  });
});