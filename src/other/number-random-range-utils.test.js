import { getRandomIntInRange } from './number-random-range-utils.js';

describe('Number Random Range Utilities', () => {
  test('should return a number within the specified range (inclusive)', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const randomNumber = getRandomIntInRange(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
      expect(Number.isInteger(randomNumber)).toBe(true);
    }
  });

  test('should return the min value when min and max are the same', () => {
    expect(getRandomIntInRange(5, 5)).toBe(5);
  });

  test('should handle negative numbers', () => {
    const min = -10;
    const max = -1;
    for (let i = 0; i < 100; i++) {
      const randomNumber = getRandomIntInRange(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
      expect(Number.isInteger(randomNumber)).toBe(true);
    }
  });

  test('should handle mixed positive and negative numbers', () => {
    const min = -5;
    const max = 5;
    for (let i = 0; i < 100; i++) {
      const randomNumber = getRandomIntInRange(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
      expect(Number.isInteger(randomNumber)).toBe(true);
    }
  });

  test('should throw an error if min is not a number', () => {
    expect(() => getRandomIntInRange('1', 10)).toThrow('Min and max must be numbers.');
  });

  test('should throw an error if max is not a number', () => {
    expect(() => getRandomIntInRange(1, '10')).toThrow('Min and max must be numbers.');
  });

  test('should throw an error if min is greater than max', () => {
    expect(() => getRandomIntInRange(10, 1)).toThrow('Min cannot be greater than max.');
  });
});