import { randomInt, randomString } from './random-utils.js';

describe('Random Utilities', () => {
  describe('randomInt', () => {
    test('should generate an integer within the specified range (inclusive)', () => {
      const min = 1;
      const max = 10;
      for (let i = 0; i < 100; i++) {
        const num = randomInt(min, max);
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThanOrEqual(max);
        expect(Number.isInteger(num)).toBe(true);
      }
    });

    test('should handle negative ranges', () => {
      const min = -5;
      const max = -1;
      for (let i = 0; i < 100; i++) {
        const num = randomInt(min, max);
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThanOrEqual(max);
        expect(Number.isInteger(num)).toBe(true);
      }
    });

    test('should handle min and max being the same', () => {
      expect(randomInt(5, 5)).toBe(5);
    });

    test('should handle float inputs by flooring/ceiling', () => {
      const num = randomInt(1.1, 10.9);
      expect(num).toBeGreaterThanOrEqual(2);
      expect(num).toBeLessThanOrEqual(10);
      expect(Number.isInteger(num)).toBe(true);
    });
  });

  describe('randomString', () => {
    test('should generate a string of the specified length', () => {
      const length = 10;
      const str = randomString(length);
      expect(str.length).toBe(length);
    });

    test('should generate a string using default characters', () => {
      const str = randomString(5);
      const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (const char of str) {
        expect(defaultChars).toContain(char);
      }
    });

    test('should generate a string using custom characters', () => {
      const customChars = 'abc';
      const str = randomString(5, customChars);
      expect(str.length).toBe(5);
      for (const char of str) {
        expect(customChars).toContain(char);
      }
    });

    test('should return an empty string if length is 0', () => {
      expect(randomString(0)).toBe('');
    });

    test('should return an empty string if characters is empty', () => {
      expect(randomString(5, '')).toBe('');
    });
  });
});