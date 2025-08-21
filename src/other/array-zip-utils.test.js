import { zip } from './array-zip-utils.js';

describe('zip', () => {
  test('should zip two arrays of the same length', () => {
    const result = zip(['a', 'b'], [1, 2]);
    expect(result).toEqual([['a', 1], ['b', 2]]);
  });

  test('should zip multiple arrays of the same length', () => {
    const result = zip(['a', 'b'], [1, 2], [true, false]);
    expect(result).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  test('should zip arrays of different lengths, truncating to the shortest', () => {
    const result = zip(['a', 'b', 'c'], [1, 2]);
    expect(result).toEqual([['a', 1], ['b', 2], ['c', undefined]]);
  });

  test('should handle empty arrays', () => {
    const result = zip([], [1, 2]);
    expect(result).toEqual([[], []]);
  });

  test('should return an empty array if no arrays are provided', () => {
    const result = zip();
    expect(result).toEqual([]);
  });

  test('should handle arrays with different data types', () => {
    const result = zip([1, 'b'], [true, null]);
    expect(result).toEqual([[1, true], ['b', null]]);
  });
});
