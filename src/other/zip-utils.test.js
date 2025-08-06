import { zip } from './zip-utils.js';

describe('zip', () => {
  test('should zip together arrays of same length', () => {
    const result = zip(['a', 'b'], [1, 2], [true, false]);
    expect(result).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  test('should zip together arrays of different lengths', () => {
    const result = zip(['a', 'b'], [1, 2, 3], [true]);
    expect(result).toEqual([['a', 1, true], ['b', 2, undefined], [undefined, 3, undefined]]);
  });

  test('should handle empty arrays', () => {
    expect(zip([], [])).toEqual([]);
    expect(zip(['a'], [])).toEqual([['a', undefined]]);
  });

  test('should return an empty array when no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  test('should handle non-array inputs gracefully', () => {
    const result = zip(['a', 'b'], null, [1, 2], undefined);
    expect(result).toEqual([['a', undefined, 1, undefined], ['b', undefined, 2, undefined]]);
  });

  test('should work with a single array', () => {
    expect(zip(['a', 'b'])).toEqual([['a'], ['b']]);
  });
});