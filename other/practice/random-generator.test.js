const { randomInt, randomString } = require('./random-generator');

describe('Random Generator', () => {
  describe('randomInt', () => {
    test('should generate a random integer within the specified range (inclusive)', () => {
      const min = 10;
      const max = 20;
      const generated = new Set();
      for (let i = 0; i < 1000; i++) {
        const num = randomInt(min, max);
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThanOrEqual(max);
        generated.add(num);
      }
      // It's highly unlikely that all numbers in the range won't be generated in 1000 tries
      expect(generated.size).toBeGreaterThanOrEqual(max - min + 1 - 2); // Allow for small statistical variance
    });

    test('should handle negative numbers', () => {
      const min = -5;
      const max = 0;
      for (let i = 0; i < 100; i++) {
        const num = randomInt(min, max);
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThanOrEqual(max);
      }
    });
  });

  describe('randomString', () => {
    test('should generate a string of the specified length', () => {
      const length = 10;
      const str = randomString(length);
      expect(str.length).toBe(length);
    });

    test('should generate a string using default character set', () => {
      const str = randomString(50);
      const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (const char of str) {
        expect(defaultChars).toContain(char);
      }
    });

    test('should generate a string using a custom character set', () => {
      const customChars = 'abc';
      const str = randomString(10, customChars);
      expect(str.length).toBe(10);
      for (const char of str) {
        expect(customChars).toContain(char);
      }
    });

    test('should return an empty string for length 0', () => {
      expect(randomString(0)).toBe('');
    });
  });
});
