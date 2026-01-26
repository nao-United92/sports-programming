const { capitalize, camelCase } = require('./string-case-changer');

describe('String Case Changers', () => {
  describe('capitalize', () => {
    test('should capitalize the first letter of a word', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('should return the same string if the first letter is already capitalized', () => {
      expect(capitalize('World')).toBe('World');
    });

    test('should work with a single character string', () => {
      expect(capitalize('a')).toBe('A');
    });

    test('should return an empty string if input is empty', () => {
      expect(capitalize('')).toBe('');
    });

    test('should handle non-string inputs gracefully', () => {
      expect(capitalize(123)).toBe(123);
      expect(capitalize(null)).toBe(null);
      expect(capitalize(undefined)).toBe(undefined);
    });
  });

  describe('camelCase', () => {
    test('should convert a space-separated string to camelCase', () => {
      expect(camelCase('hello world')).toBe('helloWorld');
    });

    test('should convert a kebab-case string to camelCase', () => {
      expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
    });

    test('should convert a snake_case string to camelCase', () => {
      expect(camelCase('another_string_to_convert')).toBe('anotherStringToConvert');
    });

    test('should handle already camelCased strings', () => {
      expect(camelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
    });

    test('should return an empty string for empty or invalid input', () => {
      expect(camelCase('')).toBe('');
      expect(camelCase(null)).toBe('');
    });

    test('should handle strings with leading or trailing spaces', () => {
      expect(camelCase('  leading spaces  ')).toBe('leadingSpaces');
    });
  });
});
