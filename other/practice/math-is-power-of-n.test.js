const isPowerOfN = require('./math-is-power-of-n');

describe('isPowerOfN', () => {
  test('returns true for powers of n', () => {
    expect(isPowerOfN(8, 2)).toBe(true);
    expect(isPowerOfN(27, 3)).toBe(true);
    expect(isPowerOfN(100, 10)).toBe(true);
    expect(isPowerOfN(1, 2)).toBe(true);
    expect(isPowerOfN(1, 5)).toBe(true);
    expect(isPowerOfN(625, 5)).toBe(true);
  });

  test('returns false for non-powers of n', () => {
    expect(isPowerOfN(10, 2)).toBe(false);
    expect(isPowerOfN(26, 3)).toBe(false);
    expect(isPowerOfN(0, 2)).toBe(false);
    expect(isPowerOfN(10, 1)).toBe(false);
  });
});
