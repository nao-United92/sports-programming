// src/other/string-manipulation-utils.test.js

const { reverseString } = require('./string-manipulation-utils');

describe('String Manipulation Utils', () => {
  describe('reverseString', () => {
    test('should reverse a simple string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });

    test('should reverse a string with spaces', () => {
      expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('should reverse an empty string', () => {
      expect(reverseString('')).toBe('');
    });

    test('should reverse a single character string', () => {
      expect(reverseString('a')).toBe('a');
    });

    test('should reverse a string with special characters', () => {
      expect(reverseString('!@#$')).toBe('$#@!');
    });

    test('should return an empty string for non-string inputs', () => {
      expect(reverseString(null)).toBe('');
      expect(reverseString(undefined)).toBe('');
      expect(reverseString(123)).toBe('');
      expect(reverseString({})).toBe('');
      expect(reverseString([])).toBe('');
    });
  });
});