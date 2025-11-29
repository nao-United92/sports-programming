// src/other/string-utility-functions.test.js

const { truncate } = require('./string-utility-functions');

describe('String Utility Functions', () => {
  describe('truncate', () => {
    test('should truncate a string and add ellipsis if it exceeds maxLength', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
    });

    test('should not truncate if string length is less than maxLength', () => {
      expect(truncate('hello', 10)).toBe('hello');
    });

    test('should not truncate if string length is equal to maxLength', () => {
      expect(truncate('hello', 5)).toBe('hello');
    });

    test('should handle empty string input', () => {
      expect(truncate('', 5)).toBe('');
    });

    test('should handle maxLength of 0', () => {
      expect(truncate('hello', 0)).toBe('...');
    });

    test('should return an empty string for non-string inputs', () => {
      expect(truncate(null, 5)).toBe('');
      expect(truncate(undefined, 5)).toBe('');
      expect(truncate(123, 5)).toBe('');
      expect(truncate({}, 5)).toBe('');
    });

    test('should handle strings with special characters', () => {
      expect(truncate('!@#$%^&*()', 5)).toBe('!@#$%...');
    });
  });
});
