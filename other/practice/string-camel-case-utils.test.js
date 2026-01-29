import camelCase from './string-camel-case-utils';

describe('camelCase', () => {
  it('should convert kebab-case to camelCase', () => {
    expect(camelCase('kebab-case-string')).toBe('kebabCaseString');
  });

  it('should convert snake_case to camelCase', () => {
    expect(camelCase('snake_case_string')).toBe('snakeCaseString');
  });

  it('should convert space separated strings to camelCase', () => {
    expect(camelCase('space separated string')).toBe('spaceSeparatedString');
  });

  it('should convert PascalCase to camelCase', () => {
    expect(camelCase('PascalCaseString')).toBe('pascalCaseString');
  });

  it('should handle strings with numbers', () => {
    expect(camelCase('string with 1 number')).toBe('stringWith1Number');
  });

  it('should handle empty strings', () => {
    expect(camelCase('')).toBe('');
  });

  it('should handle non-string inputs', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
    expect(camelCase(123)).toBe('');
  });

  it('should handle already camelCase strings', () => {
    expect(camelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
  });

  it('should handle strings with leading/trailing non-alphanumeric characters', () => {
    expect(camelCase('__ leading and trailing __')).toBe('leadingAndTrailing');
  });

  it('should handle multiple non-alphanumeric separators', () => {
    expect(camelCase('foo--bar__baz')).toBe('fooBarBaz');
  });
});
