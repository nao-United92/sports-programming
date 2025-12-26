const {
  kebabCase
} = require('./string-kebab-case-utils');

describe('kebabCase', () => {
  test('should convert a string to kebab case', () => {
    expect(kebabCase('camelCase')).toBe('camel-case');
    expect(kebabCase('some-string')).toBe('some-string');
    expect(kebabCase('some string')).toBe('some-string');
    expect(kebabCase('some-string-with-a-dash')).toBe('some-string-with-a-dash');
    expect(kebabCase('XMLHttpRequest')).toBe('xml-http-request');
  });

  test('should handle an empty string', () => {
    expect(kebabCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(kebabCase(null)).toBe('');
    expect(kebabCase(undefined)).toBe('');
    expect(kebabCase(123)).toBe('');
  });

  test('should handle strings with multiple spaces', () => {
    expect(kebabCase('  foo   bar  ')).toBe('foo-bar');
  });
});