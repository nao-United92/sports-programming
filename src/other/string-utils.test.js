import { truncate, toKebabCase, toSnakeCase } from './string-utils.js';

describe('String Utilities', () => {
  describe('truncate', () => {
    test('should truncate a string that is longer than the specified length', () => {
      expect(truncate('This is a long sentence.', 10)).toBe('This is a ...');
    });

    test('should not truncate a string that is shorter than the specified length', () => {
      expect(truncate('Short', 10)).toBe('Short');
    });

    test('should not truncate a string that is equal to the specified length', () => {
      expect(truncate('Exactly 10', 10)).toBe('Exactly 10');
    });
  });

  describe('toKebabCase', () => {
    test('should convert camelCase to kebab-case', () => {
      expect(toKebabCase('camelCase')).toBe('camel-case');
    });

    test('should convert PascalCase to kebab-case', () => {
      expect(toKebabCase('PascalCase')).toBe('pascal-case');
    });

    test('should convert sentences with spaces to kebab-case', () => {
      expect(toKebabCase('A new post')).toBe('a-new-post');
    });

    test('should handle special characters', () => {
      expect(toKebabCase('__FOO_BAR__')).toBe('foo-bar');
    });
  });

  describe('toSnakeCase', () => {
    test('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('camelCase')).toBe('camel_case');
    });

    test('should convert PascalCase to snake_case', () => {
      expect(toSnakeCase('PascalCase')).toBe('pascal_case');
    });

    test('should convert sentences with spaces to snake_case', () => {
      expect(toSnakeCase('A new post')).toBe('a_new_post');
    });

    test('should handle special characters', () => {
      expect(toSnakeCase('__FOO_BAR__')).toBe('foo_bar');
    });
  });
});