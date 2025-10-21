import { isEven, isOdd, randomInt } from './number-utils.js';

describe('isEven', () => {
  test('should return true for even numbers', () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(2)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });

  test('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });

  test('should handle floating point numbers correctly', () => {
    expect(isEven(2.0)).toBe(true);
    expect(isEven(2.5)).toBe(false);
  });
});

describe('isOdd', () => {
  test('should return true for odd numbers', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(-3)).toBe(true);
  });

  test('should return false for even numbers', () => {
    expect(isOdd(0)).toBe(false);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(-4)).toBe(false);
  });

  test('should handle floating point numbers correctly', () => {
    expect(isOdd(1.0)).toBe(true);
    expect(isOdd(2.5)).toBe(true);
  });
});

describe('randomInt', () => {
  test('should return an integer within the specified range', () => {
    for (let i = 0; i < 100; i++) {
      const num = randomInt(1, 10);
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(10);
      expect(Number.isInteger(num)).toBe(true);
    }
  });

  test('should return the min value when min and max are the same', () => {
    expect(randomInt(5, 5)).toBe(5);
  });

  test('should throw an error if min is greater than max', () => {
    expect(() => randomInt(10, 1)).toThrow('min cannot be greater than max');
  });

  test('should handle negative numbers', () => {
    for (let i = 0; i < 100; i++) {
      const num = randomInt(-5, -1);
      expect(num).toBeGreaterThanOrEqual(-5);
      expect(num).toBeLessThanOrEqual(-1);
      expect(Number.isInteger(num)).toBe(true);
    }
  });

  test('should handle zero in range', () => {
    for (let i = 0; i < 100; i++) {
      const num = randomInt(-1, 1);
      expect(num).toBeGreaterThanOrEqual(-1);
      expect(num).toBeLessThanOrEqual(1);
      expect(Number.isInteger(num)).toBe(true);
    }
  });
});