import { toSnakeCase } from './string-utils.js';

describe('toSnakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(toSnakeCase('camelCase')).toBe('camel_case');
  });

  test('should convert PascalCase to snake_case', () => {
    expect(toSnakeCase('PascalCase')).toBe('pascal_case');
  });

  test('should not change snake_case', () => {
    expect(toSnakeCase('snake_case')).toBe('snake_case');
  });

  test('should handle an empty string', () => {
    expect(toSnakeCase('')).toBe('');
  });

  test('should handle a single word', () => {
    expect(toSnakeCase('word')).toBe('word');
  });
});