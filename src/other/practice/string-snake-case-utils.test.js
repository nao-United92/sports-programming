import { snakeCase } from './string-snake-case-utils.js';

describe('snakeCase', () => {
  test('should convert a string to snake_case', () => {
    expect(snakeCase('camelCase')).toBe('camel_case');
    expect(snakeCase('some string')).toBe('some_string');
    expect(snakeCase('dash-case')).toBe('dash_case');
    expect(snakeCase('PascalCase')).toBe('pascal_case');
  });

  test('should handle empty string', () => {
    expect(snakeCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(snakeCase(null)).toBe('');
    expect(snakeCase(undefined)).toBe('');
    expect(snakeCase(123)).toBe('');
  });
});
