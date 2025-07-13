
import { clamp, roundToDecimal, randomInt, isEven, isOdd } from './number-advanced-utils';

describe('clamp', () => {
  test('should clamp value within range', () => {
    expect(clamp(10, 0, 100)).toBe(10);
    expect(clamp(-5, 0, 100)).toBe(0);
    expect(clamp(150, 0, 100)).toBe(100);
  });

  test('should handle negative min/max', () => {
    expect(clamp(-10, -20, -5)).toBe(-10);
    expect(clamp(0, -10, 10)).toBe(0);
  });
});

describe('roundToDecimal', () => {
  test('should round to specified decimal places', () => {
    expect(roundToDecimal(10.12345, 2)).toBe(10.12);
    expect(roundToDecimal(10.98765, 3)).toBe(10.988);
    expect(roundToDecimal(10, 0)).toBe(10);
    expect(roundToDecimal(10.5, 0)).toBe(11);
    expect(roundToDecimal(10.4, 0)).toBe(10);
  });

  test('should handle negative numbers', () => {
    expect(roundToDecimal(-10.123, 2)).toBe(-10.12);
  });

  test('should return NaN for invalid input', () => {
    expect(isNaN(roundToDecimal('abc', 2))).toBe(true);
    expect(isNaN(roundToDecimal(10, 'abc'))).toBe(true);
    expect(isNaN(roundToDecimal(10, -1))).toBe(true);
  });
});

describe('randomInt', () => {
  test('should generate random integer within range', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = randomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('should handle min and max being the same', () => {
    expect(randomInt(5, 5)).toBe(5);
  });
});

describe('isEven', () => {
  test('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });

  test('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });

  test('should return false for non-numbers', () => {
    expect(isEven('2')).toBe(false);
    expect(isEven(null)).toBe(false);
    expect(isEven(undefined)).toBe(false);
  });
});

describe('isOdd', () => {
  test('should return true for odd numbers', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(-3)).toBe(true);
  });

  test('should return false for even numbers', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(0)).toBe(false);
  });

  test('should return false for non-numbers', () => {
    expect(isOdd('1')).toBe(false);
    expect(isOdd(null)).toBe(false);
    expect(isOdd(undefined)).toBe(false);
  });
});
