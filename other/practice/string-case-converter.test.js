import { toCamelCase, toSnakeCase, toKebabCase } from './string-case-converter.js';

describe('String Case Converters', () => {
  describe('toCamelCase', () => {
    test('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world_from_snake')).toBe('helloWorldFromSnake');
    });
    test('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world-from-kebab')).toBe('helloWorldFromKebab');
    });
    test('should handle already camelCased strings', () => {
      expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });
    test('should handle PascalCase strings', () => {
      expect(toCamelCase('HelloWorld')).toBe('helloWorld');
    });
    test('should handle empty strings', () => {
      expect(toCamelCase('')).toBe('');
    });
    test('should handle non-string inputs', () => {
      expect(toCamelCase(null)).toBe('');
      expect(toCamelCase(undefined)).toBe('');
    });
  });

  describe('toSnakeCase', () => {
    test('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorldFromCamel')).toBe('hello_world_from_camel');
    });
    test('should convert kebab-case to snake_case', () => {
      expect(toSnakeCase('hello-world-from-kebab')).toBe('hello_world_from_kebab');
    });
    test('should handle already snake_cased strings', () => {
      expect(toSnakeCase('hello_world')).toBe('hello_world');
    });
    test('should handle PascalCase strings', () => {
      expect(toSnakeCase('HelloWorld')).toBe('hello_world');
    });
  });

  describe('toKebabCase', () => {
    test('should convert camelCase to kebab-case', () => {
      expect(toKebabCase('helloWorldFromCamel')).toBe('hello-world-from-camel');
    });
    test('should convert snake_case to kebab-case', () => {
      expect(toKebabCase('hello_world_from_snake')).toBe('hello-world-from-snake');
    });
    test('should handle already kebab-cased strings', () => {
      expect(toKebabCase('hello-world')).toBe('hello-world');
    });
    test('should handle PascalCase strings', () => {
      expect(toKebabCase('HelloWorld')).toBe('hello-world');
    });
  });
});
