import { randomString, randomNumberInRange, randomBoolean } from './random-data-utils.js';

describe('Random Data Utilities', () => {
  describe('randomString', () => {
    it('should generate a string of the specified length', () => {
      const length = 10;
      const str = randomString(length);
      expect(str.length).toBe(length);
    });

    it('should generate a string using only specified characters', () => {
      const chars = 'abc';
      const str = randomString(5, chars);
      expect(str).toMatch(/^[abc]{5}$/);
    });

    it('should generate different strings on multiple calls', () => {
      const str1 = randomString(10);
      const str2 = randomString(10);
      expect(str1).not.toBe(str2); // High probability of being different
    });
  });

  describe('randomNumberInRange', () => {
    it('should generate a number within the specified range', () => {
      const min = 10;
      const max = 20;
      for (let i = 0; i < 100; i++) {
        const num = randomNumberInRange(min, max);
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThanOrEqual(max);
        expect(Number.isInteger(num)).toBe(true);
      }
    });

    it('should handle negative ranges', () => {
      const min = -5;
      const max = -1;
      for (let i = 0; i < 100; i++) {
        const num = randomNumberInRange(min, max);
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThanOrEqual(max);
      }
    });
  });

  describe('randomBoolean', () => {
    it('should return a boolean value', () => {
      const bool = randomBoolean();
      expect(typeof bool).toBe('boolean');
    });

    it('should return true and false over multiple calls', () => {
      let hasTrue = false;
      let hasFalse = false;
      for (let i = 0; i < 100; i++) {
        const bool = randomBoolean();
        if (bool) hasTrue = true;
        else hasFalse = true;
        if (hasTrue && hasFalse) break;
      }
      expect(hasTrue).toBe(true);
      expect(hasFalse).toBe(true);
    });
  });
});
