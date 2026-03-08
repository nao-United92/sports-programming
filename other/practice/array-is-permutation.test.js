import { isPermutation } from './array-is-permutation';

describe('isPermutation', () => {
  test('should return true for permutations', () => {
    expect(isPermutation([1, 2, 3], [3, 2, 1])).toBe(true);
    expect(isPermutation(['a', 'b', 'b'], ['b', 'a', 'b'])).toBe(true);
  });

  test('should return false for non-permutations', () => {
    expect(isPermutation([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(isPermutation([1, 2, 2], [1, 2])).toBe(false);
  });
});
