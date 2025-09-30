import { randomIntInRange } from './number-utils.js';

describe('number-utils', () => {
  describe('randomIntInRange', () => {
    it('should return a number within the specified range', () => {
      const min = 1;
      const max = 10;
      for (let i = 0; i < 100; i++) {
        const result = randomIntInRange(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
      }
    });

    it('should return the min value when min and max are the same', () => {
      const min = 5;
      const max = 5;
      const result = randomIntInRange(min, max);
      expect(result).toBe(5);
    });

    it('should handle negative numbers', () => {
        const min = -10;
        const max = -1;
        for (let i = 0; i < 100; i++) {
          const result = randomIntInRange(min, max);
          expect(result).toBeGreaterThanOrEqual(min);
          expect(result).toBeLessThanOrEqual(max);
        }
    });
  });
});