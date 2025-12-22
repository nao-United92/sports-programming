import { snakeCase } from './string-snake-case-utils';

describe('snakeCase', () => {
  it('should convert camelCase to snake_case', () => {
    expect(snakeCase('camelCase')).toBe('camel_case');
  });

  it('should convert PascalCase to snake_case', () => {
    expect(snakeCase('PascalCase')).toBe('pascal_case');
  });

  it('should convert kebab-case to snake_case', () => {
    expect(snakeCase('kebab-case')).toBe('kebab_case');
  });

  it('should handle sentences', () => {
    expect(snakeCase('a new post')).toBe('a_new_post');
  });

  it('should handle empty strings', () => {
    expect(snakeCase('')).toBe('');
  });

  it('should handle null and undefined', () => {
    expect(snakeCase(null)).toBe('');
    expect(snakeCase(undefined)).toBe('');
  });
});
