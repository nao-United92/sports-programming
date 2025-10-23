import { getRandomInt } from './number-random-int-utils.js';

describe('getRandomInt', () => {
  it('should return an integer within the specified range (inclusive)', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it('should return the same number when min and max are equal', () => {
    const num = 5;
    expect(getRandomInt(num, num)).toBe(num);
  });

  it('should handle negative ranges', () => {
    const min = -10;
    const max = -1;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it('should handle mixed positive and negative ranges', () => {
    const min = -5;
    const max = 5;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it('should return an integer even with float inputs for min/max', () => {
    const min = 1.1;
    const max = 10.9;
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(Math.ceil(min));
      expect(result).toBeLessThanOrEqual(Math.floor(max));
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it('should return NaN for non-numeric inputs', () => {
    expect(isNaN(getRandomInt('a', 10))).toBe(true);
    expect(isNaN(getRandomInt(1, 'b'))).toBe(true);
    expect(isNaN(getRandomInt(null, 10))).toBe(true);
    expect(isNaN(getRandomInt(undefined, 10))).toBe(true);
  });
});
