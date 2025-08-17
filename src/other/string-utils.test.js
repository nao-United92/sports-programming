import { toSnakeCase, capitalize, kebabCase } from './string-utils.js';

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

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('fred')).toBe('Fred');
  });

  test('should lower case the rest of the string', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });

  test('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('kebabCase', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(kebabCase('camelCase')).toBe('camel-case');
  });

  test('should convert PascalCase to kebab-case', () => {
    expect(kebabCase('PascalCase')).toBe('pascal-case');
  });

  test('should convert snake_case to kebab-case', () => {
    expect(kebabCase('snake_case')).toBe('snake-case');
  });

  test('should handle an empty string', () => {
    expect(kebabCase('')).toBe('');
  });
});
