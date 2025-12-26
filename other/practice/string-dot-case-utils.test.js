const {
  dotCase
} = require('./string-dot-case-utils');

describe('dotCase', () => {
  test('should convert a string to dot case', () => {
    expect(dotCase('camelCase')).toBe('camel.case');
    expect(dotCase('some-string')).toBe('some.string');
    expect(dotCase('some string')).toBe('some.string');
    expect(dotCase('some_string')).toBe('some.string');
    expect(dotCase('XMLHttpRequest')).toBe('xml.http.request');
  });

  test('should handle an empty string', () => {
    expect(dotCase('')).toBe('');
  });

  test('should handle non-string inputs', () => {
    expect(dotCase(null)).toBe('');
    expect(dotCase(undefined)).toBe('');
    expect(dotCase(123)).toBe('');
  });

  test('should handle strings with multiple delimiters', () => {
    expect(dotCase('  foo   bar  ')).toBe('foo.bar');
    expect(dotCase('foo--bar')).toBe('foo.bar');
    expect(dotCase('foo__bar')).toBe('foo.bar');
  });
});