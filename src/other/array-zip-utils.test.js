const expect = require('expect');
const zip = require('./array-zip-utils');

describe('zip', () => {
  test('zip is a function', () => {
    expect(typeof zip).toBe('function');
  });

  test('should zip together arrays of the same length', () => {
    const result = zip(['a', 'b'], [1, 2], [true, false]);
    expect(result).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  test('should zip together arrays of different lengths', () => {
    const result = zip(['a'], [1, 2, 3], [true, false]);
    expect(result).toEqual([['a', 1, true], [undefined, 2, false], [undefined, 3, undefined]]);
  });

  test('should return an empty array if no arrays are provided', () => {
    const result = zip();
    expect(result).toEqual([]);
  });

  test('should handle empty arrays', () => {
    const result = zip([], [1, 2], []);
    expect(result).toEqual([[undefined, 1, undefined], [undefined, 2, undefined]]);
  });

  test('should handle a single array', () => {
    const result = zip([1, 2, 3]);
    expect(result).toEqual([[1], [2], [3]]);
  });
});