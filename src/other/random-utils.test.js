// src/other/random-utils.test.js

const { getRandomInt } = require('./random-utils');

describe('Random Utils', () => {
  describe('getRandomInt', () => {
    test('should return an integer within the specified inclusive range', () => {
      const min = 1;
      const max = 10;
      for (let i = 0; i < 100; i++) {
        const result = getRandomInt(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        expect(Number.isInteger(result)).toBe(true);
      }
    });

    test('should handle negative ranges', () => {
      const min = -10;
      const max = -1;
      for (let i = 0; i < 100; i++) {
        const result = getRandomInt(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        expect(Number.isInteger(result)).toBe(true);
      }
    });

    test('should handle range where min equals max', () => {
      expect(getRandomInt(5, 5)).toBe(5);
    });

    test('should return NaN for non-numeric inputs', () => {
      expect(getRandomInt('a', 10)).toBeNaN();
      expect(getRandomInt(1, 'b')).toBeNaN();
      expect(getRandomInt(null, 10)).toBeNaN();
      expect(getRandomInt(1, undefined)).toBeNaN();
    });

    test('should handle floating point min/max by flooring/ceiling', () => {
      const result = getRandomInt(1.1, 10.9);
      expect(result).toBeGreaterThanOrEqual(2); // ceil(1.1)
      expect(result).toBeLessThanOrEqual(10); // floor(10.9)
      expect(Number.isInteger(result)).toBe(true);
    });
  });
});