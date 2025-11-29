// src/other/string-case-utils.test.js

const { toCamelCase } = require('./string-case-utils');

describe('String Case Utils', () => {
  describe('toCamelCase', () => {
    test('should convert a kebab-case string to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
    });

    test('should convert a snake_case string to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld');
    });

    test('should convert a space-separated string to camelCase', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld');
    });

    test('should convert a PascalCase string to camelCase', () => {
      expect(toCamelCase('HelloWorld')).toBe('helloWorld');
    });

    test('should handle a string that is already camelCase', () => {
      expect(toCamelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
    });

    test('should handle an empty string', () => {
      expect(toCamelCase('')).toBe('');
    });

    test('should handle a single word string', () => {
      expect(toCamelCase('word')).toBe('word');
    });

    test('should handle strings with leading/trailing spaces', () => {
      expect(toCamelCase('  hello world  ')).toBe('helloWorld');
    });

    test('should handle strings with multiple delimiters', () => {
      expect(toCamelCase('foo-bar_baz qux')).toBe('fooBarBazQux');
    });

    test('should return an empty string for non-string inputs', () => {
      expect(toCamelCase(null)).toBe('');
      expect(toCamelCase(undefined)).toBe('');
      expect(toCamelCase(123)).toBe('');
      expect(toCamelCase({})).toBe('');
    });
  });
});