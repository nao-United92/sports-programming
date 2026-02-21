
const lcs = require('./array-lcs');

test('should return LCS length', () => {
  expect(lcs([1, 2, 3, 4, 1], [3, 4, 1, 2, 1, 3])).toBe(3); // 3, 4, 1 or 1, 2, 1
});

test('should return 0 if no common subsequence', () => {
  expect(lcs([1, 2, 3], [4, 5, 6])).toBe(0);
});

test('should work with empty arrays', () => {
    expect(lcs([], [1])).toBe(0);
});
