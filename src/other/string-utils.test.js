const { capitalize, truncate } = require('./string-utils');

describe('String Utils', () => {
  describe('capitalize', () => {
    test('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('should return an empty string for an empty input', () => {
      expect(capitalize('')).toBe('');
    });

    test('should handle strings with a single character', () => {
      expect(capitalize('a')).toBe('A');
    });

    test('should not change an already capitalized string', () => {
      expect(capitalize('World')).toBe('World');
    });

    test('should handle non-string inputs gracefully', () => {
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
      expect(capitalize(123)).toBe('');
    });
  });

  describe('truncate', () => {
    test('should truncate a string and add ellipsis', () => {
      expect(truncate('hello world', 5)).toBe('hello...');
    });

    test('should not truncate if string is shorter than or equal to maxLength', () => {
      expect(truncate('hello', 5)).toBe('hello');
      expect(truncate('hi', 5)).toBe('hi');
    });

    test('should return an empty string for non-string inputs', () => {
      expect(truncate(null, 5)).toBe('');
      expect(truncate(undefined, 5)).toBe('');
      expect(truncate(123, 5)).toBe('');
    });

    test('should handle empty string input', () => {
      expect(truncate('', 5)).toBe('');
    });

    test('should handle maxLength of 0', () => {
      expect(truncate('hello', 0)).toBe('...');
    });
  });
});