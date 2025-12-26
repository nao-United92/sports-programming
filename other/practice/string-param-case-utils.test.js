const {
  paramCase
} = require('./string-param-case-utils');

describe('paramCase', () => {
  test('should convert a string to param case', () => {
    expect(paramCase('camelCase')).toBe('camel-case');
    expect(paramCase('some-string')).toBe('some-string');
    expect(paramCase('some string')).toBe('some-string');
    expect(paramCase('some-string-with-a-dash')).toBe('some-string-with-a-dash');
    expect(paramCase('XMLHttpRequest')).toBe('xml-http-request');
  });

  test('should handle an empty string', () => {
    expect(paramCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(paramCase(null)).toBe('');
    expect(paramCase(undefined)).toBe('');
    expect(paramCase(123)).toBe('');
  });

  test('should handle strings with multiple spaces', () => {
    expect(paramCase('  foo   bar  ')).toBe('foo-bar');
  });
});