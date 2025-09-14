import { snakeCase } from './string-snake-case-utils';

describe('snakeCase', () => {
  it('should convert camelCase to snake_case', () => {
    expect(snakeCase('camelCase')).toBe('camel_case');
  });

  it('should convert PascalCase to snake_case', () => {
    expect(snakeCase('PascalCase')).toBe('pascal_case');
  });

  it('should convert space-separated words to snake_case', () => {
    expect(snakeCase('hello world')).toBe('hello_world');
  });

  it('should handle already snake_cased strings', () => {
    expect(snakeCase('already_snake_case')).toBe('already_snake_case');
  });

  it('should handle empty strings', () => {
    expect(snakeCase('')).toBe('');
  });

  it('should handle non-string inputs', () => {
    expect(snakeCase(null)).toBe('');
    expect(snakeCase(undefined)).toBe('');
    expect(snakeCase(123)).toBe('');
  });
});