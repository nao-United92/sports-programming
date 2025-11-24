const { toCamelCase, toSnakeCase } = require('./string-case-utils');

describe('String Case Conversion', () => {
  describe('toCamelCase', () => {
    test('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld');
    });

    test('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
    });

    test('should handle leading/trailing underscores', () => {
      expect(toCamelCase('_hello_world_')).toBe('helloWorld');
    });

    test('should handle multiple underscores', () => {
      expect(toCamelCase('hello__world')).toBe('helloWorld');
    });

    test('should return an empty string for null or undefined', () => {
      expect(toCamelCase(null)).toBe('');
      expect(toCamelCase(undefined)).toBe('');
    });

    test('should handle already camelCased strings', () => {
      expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });
  });

  describe('toSnakeCase', () => {
    test('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
    });

    test('should handle consecutive uppercase letters', () => {
      expect(toSnakeCase('helloWORLD')).toBe('hello_w_o_r_l_d');
    });

    test('should return an empty string for null or undefined', () => {
      expect(toSnakeCase(null)).toBe('');
      expect(toSnakeCase(undefined)).toBe('');
    });

    test('should handle already snake_cased strings', () => {
      expect(toSnakeCase('hello_world')).toBe('hello_world');
    });
  });
});