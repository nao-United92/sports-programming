const isPermutationOf = require('./array-is-permutation-of');

describe('isPermutationOf', () => {
  test('checks if permutation', () => {
    expect(isPermutationOf([1, 2, 3], [3, 2, 1])).toBe(true);
    expect(isPermutationOf([1, 2, 2], [2, 1, 1])).toBe(false);
  });
});
