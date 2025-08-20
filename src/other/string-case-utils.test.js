import { toSnakeCase, toKebabCase } from './string-case-utils.js';

describe('String Case Utilities', () => {
  describe('toSnakeCase', () => {
    test('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
    });

    test('should convert PascalCase to snake_case', () => {
      expect(toSnakeCase('HelloWorld')).toBe('_hello_world');
    });

    test('should handle an empty string', () => {
      expect(toSnakeCase('')).toBe('');
    });

    test('should handle already snake_cased string', () => {
      expect(toSnakeCase('hello_world')).toBe('hello_world');
    });
  });

  describe('toKebabCase', () => {
    test('should convert camelCase to kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world');
    });

    test('should convert PascalCase to kebab-case', () => {
      expect(toKebabCase('HelloWorld')).toBe('-hello-world');
    });

    test('should handle an empty string', () => {
      expect(toKebabCase('')).toBe('');
    });

    test('should handle already kebab-cased string', () => {
      expect(toKebabCase('hello-world')).toBe('hello-world');
    });
  });
});