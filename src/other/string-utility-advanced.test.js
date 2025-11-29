// src/other/string-utility-advanced.test.js

const { capitalizeWords } = require('./string-utility-advanced');

describe('String Utility Advanced', () => {
  describe('capitalizeWords', () => {
    test('should capitalize the first letter of each word in a sentence', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('should capitalize the first letter of a single word', () => {
      expect(capitalizeWords('javascript')).toBe('Javascript');
    });

    test('should handle an empty string', () => {
      expect(capitalizeWords('')).toBe('');
    });

    test('should handle a string with leading/trailing spaces', () => {
      expect(capitalizeWords('  test string  ')).toBe('  Test String  ');
    });

    test('should handle a string with multiple spaces between words', () => {
      expect(capitalizeWords('one   two    three')).toBe('One   Two    Three');
    });

    test('should handle a string with numbers and special characters', () => {
      expect(capitalizeWords('1st test-string!')).toBe('1st Test-String!');
    });

    test('should return an empty string for non-string inputs', () => {
      expect(capitalizeWords(null)).toBe('');
      expect(capitalizeWords(undefined)).toBe('');
      expect(capitalizeWords(123)).toBe('');
      expect(capitalizeWords({})).toBe('');
    });

    test('should not change already capitalized words', () => {
      expect(capitalizeWords('Hello World')).toBe('Hello World');
    });
  });
});
