import { zip } from './zip-utils';

describe('zip', () => {
  test('should zip together arrays of the same length', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = [1, 2, 3];
    const arr3 = [true, false, true];
    expect(zip(arr1, arr2, arr3)).toEqual([
      ['a', 1, true],
      ['b', 2, false],
      ['c', 3, true],
    ]);
  });

  test('should handle arrays of different lengths', () => {
    const arr1 = ['a', 'b'];
    const arr2 = [1, 2, 3];
    const arr3 = [true];
    expect(zip(arr1, arr2, arr3)).toEqual([
      ['a', 1, true],
      ['b', 2, undefined],
      [undefined, 3, undefined],
    ]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  test('should handle empty arrays', () => {
    expect(zip(['a', 'b'], [])).toEqual([
      ['a', undefined],
      ['b', undefined],
    ]);
  });

  test('should work with a single array', () => {
    expect(zip(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
  });

  test('should handle various data types', () => {
    const result = zip([null], [undefined], [{ a: 1 }]);
    expect(result).toEqual([[null, undefined, { a: 1 }]]);
  });
});
