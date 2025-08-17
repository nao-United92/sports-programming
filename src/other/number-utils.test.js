import { isEven, isOdd, random, clamp, inRange } from './number-utils';

describe('Number Utilities', () => {
  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(2)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-4)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false);
      expect(isEven(-3)).toBe(false);
    });
  });

  describe('isOdd', () => {
    it('should return true for odd numbers', () => {
      expect(isOdd(1)).toBe(true);
      expect(isOdd(-3)).toBe(true);
    });

    it('should return false for even numbers', () => {
      expect(isOdd(2)).toBe(false);
      expect(isOdd(0)).toBe(false);
      expect(isOdd(-4)).toBe(false);
    });
  });

  describe('random', () => {
    it('should generate a random number within the specified range', () => {
      const min = 1;
      const max = 10;
      const result = random(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    });
  });
});

describe('clamp', () => {
  test('should clamp a number within the bounds', () => {
    expect(clamp(10, 0, 5)).toBe(5);
    expect(clamp(-10, 0, 5)).toBe(0);
    expect(clamp(3, 0, 5)).toBe(3);
  });
});

describe('inRange', () => {
  test('should return true if number is in range', () => {
    expect(inRange(3, 0, 5)).toBe(true);
    expect(inRange(0, 0, 5)).toBe(true);
  });

  test('should return false if number is out of range', () => {
    expect(inRange(5, 0, 5)).toBe(false);
    expect(inRange(-1, 0, 5)).toBe(false);
  });
});
