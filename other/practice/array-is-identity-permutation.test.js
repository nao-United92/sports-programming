import { isIdentityPermutation } from './array-is-identity-permutation';

describe('isIdentityPermutation', () => {
  test('should return true for identity', () => {
    expect(isIdentityPermutation([0, 1, 2, 3])).toBe(true);
  });

  test('should return false for non-identity', () => {
    expect(isIdentityPermutation([0, 2, 1])).toBe(false);
  });
});
