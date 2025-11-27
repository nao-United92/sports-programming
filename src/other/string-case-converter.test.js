const { toSnakeCase, toCamelCase } = require('./string-case-converter');

describe('String Case Converters', () => {
  describe('toSnakeCase', () => {
    test('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('camelCase')).toBe('camel_case');
    });

    test('should convert PascalCase to snake_case', () => {
      expect(toSnakeCase('PascalCase')).toBe('pascal_case');
    });

    test('should handle strings with acronyms', () => {
      expect(toSnakeCase('someHTTPRequest')).toBe('some_http_request');
    });

    test('should handle strings with numbers', () => {
      expect(toSnakeCase('version123Update')).toBe('version123_update');
    });

    test('should not change already snake_cased strings', () => {
      expect(toSnakeCase('already_snake_case')).toBe('already_snake_case');
    });

    test('should return an empty string for empty input', () => {
      expect(toSnakeCase('')).toBe('');
    });
  });

  describe('toCamelCase', () => {
    test('should convert snake_case to camelCase', () => {
      expect(toCamelCase('snake_case')).toBe('snakeCase');
    });

    test('should convert kebab-case to camelCase', () => {
      expect(toCamelCase('kebab-case')).toBe('kebabCase');
    });

    test('should handle multiple delimiters', () => {
      expect(toCamelCase('some_http_request')).toBe('someHttpRequest');
    });

    test('should handle leading underscores', () => {
      expect(toCamelCase('_private_variable')).toBe('_privateVariable');
    });

    test('should not change already camelCased strings', () => {
      expect(toCamelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
    });

    test('should return an empty string for empty input', () => {
      expect(toCamelCase('')).toBe('');
    });
  });
});