const { truncate, mask, countOccurrences } = require('./string-enhancements.js');

describe('String Enhancements', () => {
  describe('truncate', () => {
    test('should not truncate a string shorter than the specified length', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    test('should truncate a string to the specified length', () => {
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    test('should use a custom suffix', () => {
      expect(truncate('hello world', 8, '...')).toBe('hello...');
    });

    test('should handle edge case where length is equal to string length', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });

    test('should handle suffix longer than length', () => {
        expect(truncate('abc', 2, '...')).toBe('...');
    });
  });

  describe('mask', () => {
    test('should mask a credit card number', () => {
      expect(mask('1234567890123456', 4, 4)).toBe('1234********3456');
    });

    test('should use a custom mask character', () => {
      expect(mask('1234567890123456', 4, 4, '#')).toBe('1234########3456');
    });

    test('should not mask a string shorter than the visible parts', () => {
      expect(mask('123456', 4, 4)).toBe('123456');
    });

    test('should handle zero visible characters', () => {
        expect(mask('password', 0, 0)).toBe('********');
    });
  });

  describe('countOccurrences', () => {
    test('should count occurrences of a substring', () => {
      expect(countOccurrences('hello world, hello', 'hello')).toBe(2);
    });

    test('should return 0 if substring is not found', () => {
      expect(countOccurrences('hello world', 'bye')).toBe(0);
    });

    test('should handle overlapping substrings', () => {
      // Non-overlapping as per implementation
      expect(countOccurrences('ababab', 'aba')).toBe(1);
    });

    test('should return 0 for an empty substring', () => {
      expect(countOccurrences('hello', '')).toBe(0);
    });
  });
});