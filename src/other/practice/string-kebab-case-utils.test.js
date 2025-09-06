import { kebabCase } from './string-kebab-case-utils.js';

describe('kebabCase', () => {
  test('should convert a string to kebab-case', () => {
    expect(kebabCase('camelCase')).toBe('camel-case');
    expect(kebabCase('some string')).toBe('some-string');
    expect(kebabCase('dash-case')).toBe('dash-case');
    expect(kebabCase('PascalCase')).toBe('pascal-case');
  });

  test('should handle empty string', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
    expect(kebabCase(123)).toBe('');
  });
});
