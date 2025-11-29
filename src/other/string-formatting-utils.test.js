// src/other/string-formatting-utils.test.js

const { padLeft } = require('./string-formatting-utils');

describe('String Formatting Utils', () => {
  describe('padLeft', () => {
    test('should pad a string with spaces on the left to reach the desired length', () => {
      expect(padLeft('abc', 5)).toBe('  abc');
    });

    test('should pad a string with a specified character', () => {
      expect(padLeft('abc', 5, '0')).toBe('00abc');
    });

    test('should not pad if the string is already long enough', () => {
      expect(padLeft('abcdef', 5)).toBe('abcdef');
    });

    test('should not pad if the string is longer than the desired length', () => {
      expect(padLeft('abcdefg', 5)).toBe('abcdefg');
    });

    test('should handle empty string input', () => {
      expect(padLeft('', 3, '*')).toBe('***');
    });

    test('should handle number input', () => {
      expect(padLeft(123, 5, '0')).toBe('00123');
    });

    test('should handle single character string', () => {
      expect(padLeft('a', 3, '-')).toBe('--a');
    });

    test('should handle zero length', () => {
      expect(padLeft('abc', 0)).toBe('abc');
    });

    test('should handle negative length (should not pad)', () => {
      expect(padLeft('abc', -5)).toBe('abc');
    });

    test('should use default pad character if not provided', () => {
      expect(padLeft('1', 3)).toBe('  1');
    });
  });
});