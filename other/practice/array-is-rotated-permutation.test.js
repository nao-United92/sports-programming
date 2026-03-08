import { isRotatedPermutation } from './array-is-rotated-permutation';

describe('isRotatedPermutation', () => {
  test('should return true for rotated arrays', () => {
    expect(isRotatedPermutation([1, 2, 3, 4], [3, 4, 1, 2])).toBe(true);
    expect(isRotatedPermutation([1, 2], [2, 1])).toBe(true);
  });

  test('should return false if not rotated version', () => {
    expect(isRotatedPermutation([1, 2, 3], [1, 3, 2])).toBe(false);
  });
});
