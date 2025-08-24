import { getRandomInt } from './random-utils.js';

describe('Random Utilities', () => {
  describe('getRandomInt', () => {
    it('should return an integer within the specified range (inclusive)', () => {
      const min = 1;
      const max = 10;
      for (let i = 0; i < 100; i++) {
        const randomNumber = getRandomInt(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
        expect(Number.isInteger(randomNumber)).toBe(true);
      }
    });

    it('should return the same number if min and max are equal', () => {
      expect(getRandomInt(5, 5)).toBe(5);
    });

    it('should handle negative numbers', () => {
      const min = -10;
      const max = -1;
      for (let i = 0; i < 100; i++) {
        const randomNumber = getRandomInt(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
        expect(Number.isInteger(randomNumber)).toBe(true);
      }
    });

    it('should handle min greater than max by swapping them', () => {
      const min = 10;
      const max = 1;
      for (let i = 0; i < 100; i++) {
        const randomNumber = getRandomInt(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(10);
        expect(Number.isInteger(randomNumber)).toBe(true);
      }
    });

    it('should produce different numbers over multiple calls (basic randomness check)', () => {
      const min = 1;
      const max = 100;
      const results = new Set();
      for (let i = 0; i < 50; i++) {
        results.add(getRandomInt(min, max));
      }
      // Expect more than one unique number for a reasonable range and number of calls
      expect(results.size).toBeGreaterThan(1);
    });
  });
});
