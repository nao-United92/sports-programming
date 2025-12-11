const chunk = require('./array-chunk-extended-utils');

describe('chunk', () => {
  test('should split an array into chunks of a specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5]
    ]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([
      ['a', 'b', 'c'],
      ['d']
    ]);
  });

  test('should handle arrays that divide evenly', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6]
    ]);
  });

  test('should return the original array in a single chunk if size is larger than array length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([
      [1, 2, 3]
    ]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should return an empty array if size is 0 or negative', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -1)).toEqual([]);
  });

  test('should return an empty array if size is not an integer', () => {
    expect(chunk([1, 2, 3], 2.5)).toEqual([]);
  });

  test('should handle non-array input', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
    expect(chunk('string', 2)).toEqual([]);
    expect(chunk(123, 2)).toEqual([]);
    expect(chunk({
      a: 1
    }, 2)).toEqual([]);
  });
});
