import { getRandomInt } from './number-random-int-utils';

describe('getRandomInt', () => {
  test('should return an integer within the specified range (inclusive)', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('should return the correct value when min === max', () => {
    expect(getRandomInt(5, 5)).toBe(5);
  });

  test('should handle negative numbers', () => {
    const min = -10;
    const max = -5;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('should handle mixed positive and negative numbers', () => {
    const min = -2;
    const max = 2;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  test('should throw a TypeError if min is not an integer', () => {
    expect(() => getRandomInt(1.5, 10)).toThrow('Expected min and max to be integers');
    expect(() => getRandomInt('a', 10)).toThrow('Expected min and max to be integers');
  });

  test('should throw a TypeError if max is not an integer', () => {
    expect(() => getRandomInt(1, 10.5)).toThrow('Expected min and max to be integers');
    expect(() => getRandomInt(1, null)).toThrow('Expected min and max to be integers');
  });

  test('should throw an Error if min > max', () => {
    expect(() => getRandomInt(10, 1)).toThrow('Min cannot be greater than max');
  });

  test('should (probabilistically) generate a distribution of numbers', () => {
    const min = 1;
    const max = 3;
    const results = new Set();
    for (let i = 0; i < 1000; i++) {
      results.add(getRandomInt(min, max));
    }
    // For enough iterations, all numbers in the range should have been generated at least once
    expect(results.size).toBe(max - min + 1);
    expect(results).toContain(1);
    expect(results).toContain(2);
    expect(results).toContain(3);
  });
});
