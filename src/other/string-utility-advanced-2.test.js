// src/other/string-utility-advanced-2.test.js

const { kebabCase } = require('./string-utility-advanced-2');

describe('String Utility Advanced 2', () => {
  describe('kebabCase', () => {
    test('should convert a camelCase string to kebab-case', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
    });

    test('should convert a PascalCase string to kebab-case', () => {
      expect(kebabCase('HelloWorld')).toBe('hello-world');
    });

    test('should convert a snake_case string to kebab-case', () => {
      expect(kebabCase('hello_world')).toBe('hello-world');
    });

    test('should convert a space-separated string to kebab-case', () => {
      expect(kebabCase('hello world')).toBe('hello-world');
    });

    test('should handle a string that is already kebab-case', () => {
      expect(kebabCase('already-kebab-case')).toBe('already-kebab-case');
    });

    test('should handle an empty string', () => {
      expect(kebabCase('')).toBe('');
    });

    test('should handle a single word string', () => {
      expect(kebabCase('word')).toBe('word');
    });

    test('should handle strings with leading/trailing spaces', () => {
      expect(kebabCase('  Hello World  ')).toBe('hello-world');
    });

    test('should handle strings with multiple delimiters', () => {
      expect(kebabCase('foo Bar_Baz Qux')).toBe('foo-bar-baz-qux');
    });

    test('should return an empty string for non-string inputs', () => {
      expect(kebabCase(null)).toBe('');
      expect(kebabCase(undefined)).toBe('');
      expect(kebabCase(123)).toBe('');
      expect(kebabCase({})).toBe('');
    });

    test('should handle strings with numbers', () => {
      expect(kebabCase('version1Point0')).toBe('version1-point0');
    });
  });
});
