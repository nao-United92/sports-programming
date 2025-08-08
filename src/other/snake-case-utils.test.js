import { toSnakeCase } from './snake-case-utils.js';

describe('toSnakeCase', () => {
  test('should convert camelCase to snake_case', () => {
    expect(toSnakeCase('camelCaseString')).toBe('camel_case_string');
  });

  test('should convert PascalCase to snake_case', () => {
    expect(toSnakeCase('PascalCaseString')).toBe('pascal_case_string');
  });

  test('should handle already snake_cased strings', () => {
    expect(toSnakeCase('already_snake_cased')).toBe('already_snake_cased');
  });

  test('should handle empty strings', () => {
    expect(toSnakeCase('')).toBe('');
  });

  test('should handle strings with numbers', () => {
    expect(toSnakeCase('stringWith1Number')).toBe('string_with1_number');
  });
});
