
import { randomInt, sum } from './number-utils.js';

describe('randomInt', () => {
  test('should return an integer within the specified range', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = randomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('should handle negative ranges', () => {
    const min = -5;
    const max = -1;
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

describe('sum', () => {
  test('should correctly sum an array of positive numbers', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  test('should correctly sum an array of negative numbers', () => {
    expect(sum([-1, -2, -3])).toBe(-6);
  });

  test('should correctly sum an array of mixed positive and negative numbers', () => {
    expect(sum([-1, 2, -3, 4])).toBe(2);
  });

  test('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  test('should handle an array with a single number', () => {
    expect(sum([7])).toBe(7);
  });

  test('should handle floating point numbers', () => {
    expect(sum([0.1, 0.2])).toBeCloseTo(0.3);
  });
});
