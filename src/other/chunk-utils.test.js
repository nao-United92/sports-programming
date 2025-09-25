const { chunk } = require('./chunk-utils.js');

describe('chunk', () => {
  test('should create chunks of a specified size', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    expect(chunk(array, 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });

  test('should return an empty array for empty or null input', () => {
    expect(chunk([], 2)).toEqual([]);
    expect(chunk(null, 2)).toEqual([]);
  });

  test('should handle a size of 1', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array, 1)).toEqual([['a'], ['b'], ['c']]);
  });

  test('should handle a size larger than the array length', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array, 5)).toEqual([['a', 'b', 'c']]);
  });

  test('should default to a size of 1', () => {
    const array = ['a', 'b', 'c'];
    expect(chunk(array)).toEqual([['a'], ['b'], ['c']]);
  });
});