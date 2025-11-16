import { inRange, randomInt, gcd, lcm } from './math-helpers.js';

describe('Math Helpers', () => {
  describe('inRange', () => {
    test('should return true for numbers within the range', () => {
      expect(inRange(3, 2, 4)).toBe(true);
      expect(inRange(4, 8)).toBe(true);
      expect(inRange(4, 2, 8)).toBe(true);
    });

    test('should return false for numbers outside the range', () => {
      expect(inRange(4, 2)).toBe(false);
      expect(inRange(2, 3, 5)).toBe(false);
      expect(inRange(5, 2, 4)).toBe(false);
    });
  });

  describe('randomInt', () => {
    test('should generate a random integer within the specified range', () => {
      const min = 1;
      const max = 10;
      const result = randomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    });
  });

  describe('gcd', () => {
    test('should calculate the greatest common divisor correctly', () => {
      expect(gcd(48, 18)).toBe(6);
      expect(gcd(101, 103)).toBe(1);
      expect(gcd(10, 5)).toBe(5);
    });
  });

  describe('lcm', () => {
    test('should calculate the least common multiple correctly', () => {
      expect(lcm(12, 18)).toBe(36);
      expect(lcm(7, 5)).toBe(35);
      expect(lcm(10, 100)).toBe(100);
    });
  });
});
