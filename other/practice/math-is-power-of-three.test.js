const isPowerOfThree = require('./math-is-power-of-three');

describe('isPowerOfThree', () => {
  test('returns true for powers of three', () => {
    expect(isPowerOfThree(1)).toBe(true);
    expect(isPowerOfThree(3)).toBe(true);
    expect(isPowerOfThree(9)).toBe(true);
    expect(isPowerOfThree(27)).toBe(true);
    expect(isPowerOfThree(81)).toBe(true);
    expect(isPowerOfThree(243)).toBe(true);
  });

  test('returns false for non-powers of three', () => {
    expect(isPowerOfThree(0)).toBe(false);
    expect(isPowerOfThree(-3)).toBe(false);
    expect(isPowerOfThree(2)).toBe(false);
    expect(isPowerOfThree(4)).toBe(false);
    expect(isPowerOfThree(6)).toBe(false);
    expect(isPowerOfThree(10)).toBe(false);
    expect(isPowerOfThree(26)).toBe(false);
    expect(isPowerOfThree(28)).toBe(false);
  });
});
