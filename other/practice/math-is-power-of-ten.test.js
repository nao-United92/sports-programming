import { isPowerOfTen } from './math-is-power-of-ten';

describe('isPowerOfTen', () => {
  test('should return true for powers of ten', () => {
    expect(isPowerOfTen(1)).toBe(true);
    expect(isPowerOfTen(10)).toBe(true);
    expect(isPowerOfTen(100)).toBe(true);
    expect(isPowerOfTen(1000)).toBe(true);
  });

  test('should return false for non-powers of ten', () => {
    expect(isPowerOfTen(2)).toBe(false);
    expect(isPowerOfTen(50)).toBe(false);
    expect(isPowerOfTen(0)).toBe(false);
  });
});
