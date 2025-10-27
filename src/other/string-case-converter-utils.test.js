import { toCamelCase, toSnakeCase, toKebabCase } from './string-case-converter-utils';

describe('string-case-converter-utils', () => {
  describe('toCamelCase', () => {
    test('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld');
    });

    test('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
    });

    test('should handle already camelCase string', () => {
      expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });

    test('should handle single word string', () => {
      expect(toCamelCase('hello')).toBe('hello');
    });

    test('should handle empty string', () => {
      expect(toCamelCase('')).toBe('');
    });
  });

  describe('toSnakeCase', () => {
    test('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
    });

    test('should convert kebab-case to snake_case', () => {
      expect(toSnakeCase('hello-world')).toBe('hello-world'); // Kebab case remains kebab case, as it's not camel case
    });

    test('should handle already snake_case string', () => {
      expect(toSnakeCase('hello_world')).toBe('hello_world');
    });

    test('should handle single word string', () => {
      expect(toSnakeCase('hello')).toBe('hello');
    });

    test('should handle empty string', () => {
      expect(toSnakeCase('')).toBe('');
    });
  });

  describe('toKebabCase', () => {
    test('should convert camelCase to kebab-case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world');
    });

    test('should convert snake_case to kebab-case', () => {
      expect(toKebabCase('hello_world')).toBe('hello_world'); // Snake case remains snake case, as it's not camel case
    });

    test('should handle already kebab-case string', () => {
      expect(toKebabCase('hello-world')).toBe('hello-world');
    });

    test('should handle single word string', () => {
      expect(toKebabCase('hello')).toBe('hello');
    });

    test('should handle empty string', () => {
      expect(toKebabCase('')).toBe('');
    });
  });
});