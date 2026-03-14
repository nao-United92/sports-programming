const dotProduct = require('./math-dot-product');

describe('dotProduct', () => {
  test('calculates the dot product of two arrays', () => {
    expect(dotProduct([1, 2, 3], [4, 5, 6])).toBe(32); // 1*4 + 2*5 + 3*6 = 4+10+18 = 32
  });

  test('returns 0 for empty arrays', () => {
    expect(dotProduct([], [])).toBe(0);
  });

  test('throws error for unequal lengths', () => {
    expect(() => dotProduct([1], [1, 2])).toThrow('Arrays must have the same length');
  });

  test('handles zero values', () => {
    expect(dotProduct([0, 1], [5, 0])).toBe(0);
  });
});
