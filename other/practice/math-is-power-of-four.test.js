import { isPowerOfFour } from './math-is-power-of-four';

describe('isPowerOfFour', () => {
  test('should return true for powers of four', () => {
    expect(isPowerOfFour(1)).toBe(true); // 4^0
    expect(isPowerOfFour(4)).toBe(true); // 4^1
    expect(isPowerOfFour(16)).toBe(true); // 4^2
    expect(isPowerOfFour(64)).toBe(true); // 4^3
  });

  test('should return false for non-powers of four', () => {
    expect(isPowerOfFour(2)).toBe(false);
    expect(isPowerOfFour(8)).toBe(false);
    expect(isPowerOfFour(32)).toBe(false);
    expect(isPowerOfFour(0)).toBe(false);
    expect(isPowerOfFour(-16)).toBe(false);
  });
});
