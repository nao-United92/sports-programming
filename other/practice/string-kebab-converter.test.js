const { kebabCase } = require('./string-kebab-converter');

describe('kebabCase', () => {
  test('should convert camelCase to kebab-case', () => {
    expect(kebabCase('camelCase')).toBe('camel-case');
  });

  test('should convert PascalCase to kebab-case', () => {
    expect(kebabCase('PascalCase')).toBe('pascal-case');
  });

  test('should handle strings with numbers', () => {
    expect(kebabCase('someString1')).toBe('some-string1');
  });

  test('should handle already kebab-cased strings', () => {
    expect(kebabCase('kebab-case')).toBe('kebab-case');
  });

  test('should return an empty string if input is empty', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should return an empty string for non-string inputs', () => {
    expect(kebabCase(123)).toBe('');
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
    expect(kebabCase({})).toBe('');
    expect(kebabCase([])).toBe('');
  });
});
