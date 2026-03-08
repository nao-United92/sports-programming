import { isSubsequenceOf } from './array-is-subsequence-of';

describe('isSubsequenceOf', () => {
  test('should return true for subsequence', () => {
    expect(isSubsequenceOf([1, 3, 5], [1, 2, 3, 4, 5])).toBe(true);
  });

  test('should return false if not subsequence', () => {
    expect(isSubsequenceOf([1, 5, 3], [1, 2, 3, 4, 5])).toBe(false);
  });
});
