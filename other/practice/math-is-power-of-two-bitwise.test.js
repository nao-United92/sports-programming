import { isPowerOfTwoBitwise } from './math-is-power-of-two-bitwise';

describe('isPowerOfTwoBitwise', () => {
  test('should return true for powers of two', () => {
    expect(isPowerOfTwoBitwise(1)).toBe(true);
    expect(isPowerOfTwoBitwise(2)).toBe(true);
    expect(isPowerOfTwoBitwise(4)).toBe(true);
    expect(isPowerOfTwoBitwise(1024)).toBe(true);
  });

  test('should return false for non-powers of two', () => {
    expect(isPowerOfTwoBitwise(0)).toBe(false);
    expect(isPowerOfTwoBitwise(3)).toBe(false);
    expect(isPowerOfTwoBitwise(6)).toBe(false);
  });
});
