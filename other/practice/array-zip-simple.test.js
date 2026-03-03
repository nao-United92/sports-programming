import { zip } from './array-zip-simple';

describe('zip', () => {
  test('should zip two arrays of the same length', () => {
    const result = zip(['a', 'b'], [1, 2]);
    expect(result).toEqual([['a', 1], ['b', 2]]);
  });

  test('should zip arrays of different lengths with undefined', () => {
    const result = zip(['a', 'b', 'c'], [1, 2]);
    expect(result).toEqual([['a', 1], ['b', 2], ['c', undefined]]);
  });

  test('should zip multiple arrays', () => {
    const result = zip([1, 2], [true, false], ['x', 'y']);
    expect(result).toEqual([[1, true, 'x'], [2, false, 'y']]);
  });
});
