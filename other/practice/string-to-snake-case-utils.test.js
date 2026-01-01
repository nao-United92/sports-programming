const { toSnakeCase } = require('./string-to-snake-case-utils');

describe('toSnakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(toSnakeCase('camelCase')).toBe('camel_case');
  });

  test('should convert PascalCase to snake_case', () => {
    expect(toSnakeCase('PascalCase')).toBe('pascal_case');
  });

  test('should handle spaces', () => {
    expect(toSnakeCase('some string')).toBe('some_string');
  });

  test('should handle special characters', () => {
    expect(toSnakeCase('__FOO-BAR__')).toBe('foo_bar');
  });

  test('should handle empty string', () => {
    expect(toSnakeCase('')).toBe('');
  });

  test('should handle null and undefined', () => {
    expect(toSnakeCase(null)).toBe('');
    expect(toSnakeCase(undefined)).toBe('');
  });

  test('should handle numbers', () => {
    expect(toSnakeCase('first1_number2')).toBe('first1_number2');
  });
});
