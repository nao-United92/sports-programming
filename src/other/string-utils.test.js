import { capitalize, camelCase } from './string-utils.js';

describe('String Utilities', () => {
  describe('capitalize', () => {
    test('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('should convert the rest of the string to lowercase', () => {
      expect(capitalize('hELLo WORLD')).toBe('Hello world');
    });

    test('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('should handle non-string input', () => {
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
      expect(capitalize(123)).toBe('');
    });

    test('should handle single character string', () => {
      expect(capitalize('a')).toBe('A');
    });
  });

  describe('camelCase', () => {
    test('should convert a kebab-case string to camelCase', () => {
      expect(camelCase('hello-world')).toBe('helloWorld');
    });

    test('should convert a snake_case string to camelCase', () => {
      expect(camelCase('hello_world')).toBe('helloWorld');
    });

    test('should convert a space-separated string to camelCase', () => {
      expect(camelCase('hello world')).toBe('helloWorld');
    });

    test('should handle mixed separators', () => {
      expect(camelCase('foo-bar_baz qux')).toBe('fooBarBazQux');
    });

    test('should handle leading/trailing separators', () => {
      expect(camelCase('-hello-world-')).toBe('helloWorld');
      expect(camelCase('_hello_world_')).toBe('helloWorld');
      expect(camelCase(' hello world ')).toBe('helloWorld');
    });

    test('should handle empty string', () => {
      expect(camelCase('')).toBe('');
    });

    test('should handle non-string input', () => {
      expect(camelCase(null)).toBe('');
      expect(camelCase(undefined)).toBe('');
      expect(camelCase(123)).toBe('');
    });

    test('should handle already camelCase string', () => {
      expect(camelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
    });
  });
});
