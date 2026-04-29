import { isPowerOfEight } from './math-is-power-of-eight';

describe('isPowerOfEight', () => {
  test('should return true for powers of eight', () => {
    expect(isPowerOfEight(1)).toBe(true); // 8^0
    expect(isPowerOfEight(8)).toBe(true); // 8^1
    expect(isPowerOfEight(64)).toBe(true); // 8^2
    expect(isPowerOfEight(512)).toBe(true); // 8^3
  });

  test('should return false for non-powers of eight', () => {
    expect(isPowerOfEight(2)).toBe(false);
    expect(isPowerOfEight(4)).toBe(false);
    expect(isPowerOfEight(16)).toBe(false);
    expect(isPowerOfEight(32)).toBe(false);
    expect(isPowerOfEight(0)).toBe(false);
  });
});
