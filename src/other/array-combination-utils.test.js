import { combinations } from './array-combination-utils';

describe('combinations', () => {
  test('should return an empty array if the combination size is larger than the array length', () => {
    expect(combinations([1, 2, 3], 4)).toEqual([]);
  });

  test('should generate combinations of size 2', () => {
    const result = combinations([1, 2, 3], 2);
    expect(result).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });

  test('should generate combinations of size 1', () => {
    const result = combinations([1, 2, 3], 1);
    expect(result).toEqual([[1], [2], [3]]);
  });

  test('should generate combinations of size 3', () => {
    const result = combinations(['a', 'b', 'c'], 3);
    expect(result).toEqual([['a', 'b', 'c']]);
  });

  test('should return an empty array for an empty input array', () => {
    expect(combinations([], 1)).toEqual([]);
  });

  test('should handle an array with duplicate elements', () => {
    const result = combinations([1, 1, 2], 2);
    expect(result).toEqual([
      [1, 1],
      [1, 2],
      [1, 2],
    ]);
  });
});
