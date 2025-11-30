import { toCamelCase, toSnakeCase } from './string-case-converter-utils';

describe('String Case Converter Utils', () => {
  describe('toCamelCase', () => {
    test('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world_from_js')).toBe('helloWorldFromJs');
    });

    test('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world-from-js')).toBe('helloWorldFromJs');
    });

    test('should convert space separated to camelCase', () => {
      expect(toCamelCase('hello world from js')).toBe('helloWorldFromJs');
    });

    test('should handle already camelCased strings', () => {
      expect(toCamelCase('helloWorldFromJs')).toBe('helloWorldFromJs');
    });

    test('should handle leading/trailing separators', () => {
      expect(toCamelCase('_hello_world_')).toBe('helloWorld');
    });

    test('should return an empty string for null or undefined input', () => {
      expect(toCamelCase(null)).toBe('');
      expect(toCamelCase(undefined)).toBe('');
    });
  });

  describe('toSnakeCase', () => {
    test('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorldFromJs')).toBe('hello_world_from_js');
    });

    test('should convert space separated to snake_case', () => {
      expect(toSnakeCase('hello world from js')).toBe('hello_world_from_js');
    });

    test('should handle already snake_cased strings', () => {
      expect(toSnakeCase('hello_world_from_js')).toBe('hello_world_from_js');
    });

    test('should handle capital letters correctly', () => {
      expect(toSnakeCase('HelloWorld')).toBe('hello_world');
    });

    test('should return an empty string for null or undefined input', () => {
      expect(toSnakeCase(null)).toBe('');
      expect(toSnakeCase(undefined)).toBe('');
    });
  });
});
