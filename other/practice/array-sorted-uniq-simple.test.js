import { sortedUniq } from './array-sorted-uniq-simple';

describe('sortedUniq', () => {
  test('should return unique elements of a sorted array', () => {
    expect(sortedUniq([1, 1, 2, 3, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('should return an empty array for empty input', () => {
    expect(sortedUniq([])).toEqual([]);
    expect(sortedUniq(null)).toEqual([]);
  });

  test('should handle single element arrays', () => {
    expect(sortedUniq([1])).toEqual([1]);
  });
});
