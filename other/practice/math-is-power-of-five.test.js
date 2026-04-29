import { isPowerOfFive } from './math-is-power-of-five';

describe('isPowerOfFive', () => {
  test('should return true for powers of five', () => {
    expect(isPowerOfFive(1)).toBe(true);
    expect(isPowerOfFive(5)).toBe(true);
    expect(isPowerOfFive(25)).toBe(true);
    expect(isPowerOfFive(125)).toBe(true);
  });

  test('should return false for non-powers of five', () => {
    expect(isPowerOfFive(2)).toBe(false);
    expect(isPowerOfFive(10)).toBe(false);
    expect(isPowerOfFive(0)).toBe(false);
  });
});
