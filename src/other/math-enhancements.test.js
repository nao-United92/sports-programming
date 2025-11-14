const { gcd, lcm, isPowerOfTwo } = require('./math-enhancements.js');

describe('Math Enhancements', () => {
  describe('gcd', () => {
    test('should calculate the greatest common divisor of two numbers', () => {
      expect(gcd(48, 18)).toBe(6);
      expect(gcd(101, 103)).toBe(1);
      expect(gcd(10, 5)).toBe(5);
      expect(gcd(7, 14)).toBe(7);
    });

    test('should handle zero', () => {
      expect(gcd(10, 0)).toBe(10);
      expect(gcd(0, 10)).toBe(10);
    });
  });

  describe('lcm', () => {
    test('should calculate the least common multiple of two numbers', () => {
      expect(lcm(12, 18)).toBe(36);
      expect(lcm(7, 5)).toBe(35);
    });

    test('should handle zero', () => {
      expect(lcm(10, 0)).toBe(0);
      expect(lcm(0, 10)).toBe(0);
    });
  });

  describe('isPowerOfTwo', () => {
    test('should return true for numbers that are a power of two', () => {
      expect(isPowerOfTwo(1)).toBe(true);
      expect(isPowerOfTwo(2)).toBe(true);
      expect(isPowerOfTwo(4)).toBe(true);
      expect(isPowerOfTwo(16)).toBe(true);
      expect(isPowerOfTwo(1024)).toBe(true);
    });

    test('should return false for numbers that are not a power of two', () => {
      expect(isPowerOfTwo(0)).toBe(false);
      expect(isPowerOfTwo(3)).toBe(false);
      expect(isPowerOfTwo(12)).toBe(false);
      expect(isPowerOfTwo(18)).toBe(false);
      expect(isPowerOfTwo(-2)).toBe(false);
    });
  });
});
