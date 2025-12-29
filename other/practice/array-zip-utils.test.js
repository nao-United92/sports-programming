import { zip } from './array-zip-utils';

describe('zip', () => {
  test('should group elements from corresponding positions in arrays', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  test('should handle arrays of different lengths, filling with undefined for missing values', () => {
    expect(zip(['a', 'b', 'c'], [1, 2])).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', undefined],
    ]);
  });

  test('should handle single array input', () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  test('should handle empty input arrays', () => {
    expect(zip([], [])).toEqual([]);
    expect(zip([1, 2], [])).toEqual([[1, undefined], [2, undefined]]);
  });

  test('should return an empty array if no arrays are provided', () => {
    expect(zip()).toEqual([]);
  });

  test('should handle arrays with mixed data types', () => {
    expect(zip([1, 'a'], [true, null])).toEqual([[1, true], ['a', null]]);
  });
});