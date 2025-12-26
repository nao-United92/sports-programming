const {
  pascalCase
} = require('./string-pascal-case-utils');

describe('pascalCase', () => {
  test('should convert a string to pascal case', () => {
    expect(pascalCase('camelCase')).toBe('CamelCase');
    expect(pascalCase('some-string')).toBe('SomeString');
    expect(pascalCase('some string')).toBe('SomeString');
    expect(pascalCase('some_string')).toBe('SomeString');
    expect(pascalCase('XMLHttpRequest')).toBe('XmlHttpRequest');
  });

  test('should handle an empty string', () => {
    expect(pascalCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(pascalCase(null)).toBe('');
    expect(pascalCase(undefined)).toBe('');
    expect(pascalCase(123)).toBe('');
  });

  test('should handle strings with multiple spaces', () => {
    expect(pascalCase('  foo   bar  ')).toBe('FooBar');
  });
});