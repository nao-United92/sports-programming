const { repeat } = require('./array-repeat-utils');

describe('repeat', () => {
  test('should repeat the elements of an array a given number of times', () => {
    expect(repeat([1, 2, 3], 3)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });

  test('should return an empty array if count is 0', () => {
    expect(repeat([1, 2, 3], 0)).toEqual([]);
  });

  test('should return the original array if count is 1', () => {
    expect(repeat(['a', 'b'], 1)).toEqual(['a', 'b']);
  });

  test('should return an empty array for an empty input array', () => {
    expect(repeat([], 5)).toEqual([]);
  });

  test('should handle non-array input gracefully', () => {
    expect(repeat(null, 3)).toEqual([]);
    expect(repeat(undefined, 3)).toEqual([]);
    expect(repeat({}, 3)).toEqual([]);
  });

  test('should handle a negative count', () => {
    expect(repeat([1, 2], -1)).toEqual([]);
  });
});
