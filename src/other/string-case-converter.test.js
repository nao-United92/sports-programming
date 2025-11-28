const { toCamelCase, toSnakeCase } = require('./string-case-converter');

describe('String Case Converters', () => {
  describe('toCamelCase', () => {
    test('should convert snake_case to camelCase', () => {
      expect(toCamelCase('hello_world')).toBe('helloWorld');
    });

    test('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
    });

    test('should handle already camelCased strings', () => {
      expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });

    test('should handle empty strings', () => {
      expect(toCamelCase('')).toBe('');
    });

    test('should handle non-string inputs', () => {
      expect(toCamelCase(null)).toBe('');
      expect(toCamelCase(undefined)).toBe('');
    });

    test('should handle a string with a leading underscore', () => {
      expect(toCamelCase('_hello_world')).toBe('HelloWorld');
    });
  });

  describe('toSnakeCase', () => {
    test('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
    });

    test('should handle already snake_cased strings', () => {
      expect(toSnakeCase('hello_world')).toBe('hello_world');
    });
    
    test('should handle strings with leading uppercase letter', () => {
      expect(toSnakeCase('HelloWorld')).toBe('_hello_world');
    });

    test('should handle empty strings', () => {
      expect(toSnakeCase('')).toBe('');
    });

    test('should handle non-string inputs', () => {
        expect(toSnakeCase(null)).toBe('');
        expect(toSnakeCase(undefined)).toBe('');
    });
  });
});
