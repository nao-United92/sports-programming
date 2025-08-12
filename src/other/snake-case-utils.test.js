import { toSnakeCase } from './snake-case-utils';

describe('toSnakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(toSnakeCase('camelCase')).toBe('camel_case');
  });

  test('should convert PascalCase to snake_case', () => {
    expect(toSnakeCase('PascalCase')).toBe('pascal_case');
  });

  test('should handle strings with spaces', () => {
    expect(toSnakeCase('some string with spaces')).toBe('some_string_with_spaces');
  });

  test('should handle strings with hyphens', () => {
    expect(toSnakeCase('kebab-case-string')).toBe('kebab_case_string');
  });

  test('should handle already snake_cased strings', () => {
    expect(toSnakeCase('already_snake_case')).toBe('already_snake_case');
  });

  test('should handle empty strings', () => {
    expect(toSnakeCase('')).toBe('');
  });

  test('should handle null and undefined', () => {
    expect(toSnakeCase(null)).toBe('');
    expect(toSnakeCase(undefined)).toBe('');
  });
});