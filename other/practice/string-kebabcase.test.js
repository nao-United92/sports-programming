import { toKebabCase } from './string-kebabcase.js';

describe('toKebabCase', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(toKebabCase('camelCase')).toBe('camel-case');
  });

  test('should convert PascalCase to kebab-case', () => {
    expect(toKebabCase('PascalCase')).toBe('pascal-case');
  });

  test('should convert space separated to kebab-case', () => {
    expect(toKebabCase('hello world')).toBe('hello-world');
  });
  
  test('should handle empty string', () => {
      expect(toKebabCase('')).toBe('');
  });
});
