const isPowerOfTwo = require('./math-is-power-of-two');

describe('isPowerOfTwo', () => {
  test('returns true for powers of two', () => {
    expect(isPowerOfTwo(1)).toBe(true);
    expect(isPowerOfTwo(2)).toBe(true);
    expect(isPowerOfTwo(4)).toBe(true);
    expect(isPowerOfTwo(8)).toBe(true);
    expect(isPowerOfTwo(16)).toBe(true);
    expect(isPowerOfTwo(1024)).toBe(true);
  });

  test('returns false for non-powers of two', () => {
    expect(isPowerOfTwo(3)).toBe(false);
    expect(isPowerOfTwo(6)).toBe(false);
    expect(isPowerOfTwo(10)).toBe(false);
    expect(isPowerOfTwo(1000)).toBe(false);
  });

  test('returns false for 0 and negative numbers', () => {
    expect(isPowerOfTwo(0)).toBe(false);
    expect(isPowerOfTwo(-8)).toBe(false);
  });
});
